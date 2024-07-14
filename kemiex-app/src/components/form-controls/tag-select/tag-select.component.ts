import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FieldBase } from '../../../models/field-base';

@Component({
  selector: 'tag-select',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
  ],
  templateUrl: './tag-select.component.html',
  styleUrl: './tag-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagSelectComponent implements ControlValueAccessor {
  private onChange = (value: FieldBase<unknown>[]): void => {};
  private onTouched = (): void => {};
  private touched = false;

  readonly currentField = signal('');
  readonly fields = signal<FieldBase<unknown>[]>([]);
  readonly allFields = input.required<FieldBase<unknown>[]>();
  readonly filteredFields = computed(() => {
    const currentField = this.currentField().toLowerCase();
    return currentField
      ? this.allFields().filter((field: { label: string }) =>
          field.label.toLowerCase().includes(currentField)
        )
      : this.allFields();
  });

  remove(field: FieldBase<unknown>): void {
    this.markAsTouched();
    this.fields.update((fields) => {
      const index = fields.indexOf(field);
      if (index < 0) {
        return fields;
      }

      fields.splice(index, 1);
      return [...fields];
    });
    this.onChange(this.fields());
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.markAsTouched();
    this.fields.update((fields) => [...fields, event.option.value]);
    this.currentField.set('');
    this.onChange(this.fields());
  }

  writeValue(fields: FieldBase<unknown>[]): void {
    this.fields.set(fields);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
