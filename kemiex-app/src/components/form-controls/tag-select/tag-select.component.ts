import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
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
export class TagSelectComponent {
  readonly currentField = signal('');
  readonly fields = signal<FieldBase<string>[]>([]);
  readonly allFields = input<FieldBase<unknown>[]>([
    new FieldBase<number>({
      key: 'age',
      label: 'Age',
      value: 25,
      order: 1,
    }),
    new FieldBase<string>({
      key: 'gender',
      label: 'Gender',
      value: 'M',
      order: 2,
    }),
  ]);
  readonly filteredFields = computed(() => {
    const currentField = this.currentField().toLowerCase();
    return currentField
      ? this.allFields().filter((field) =>
          field.label.toLowerCase().includes(currentField)
        )
      : this.allFields();
  });

  remove(field: FieldBase<string>): void {
    this.fields.update((fields) => {
      const index = fields.indexOf(field);
      if (index < 0) {
        return fields;
      }

      fields.splice(index, 1);
      return [...fields];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fields.update((fields) => [...fields, event.option.value]);
    this.currentField.set('');
  }
}
