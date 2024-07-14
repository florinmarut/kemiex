import { Component, input } from '@angular/core';
import { FieldBase } from '../../../models/field-base';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TagSelectComponent } from '../../form-controls/tag-select/tag-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldsPipe } from "../../../pipes/fields.pipe";

@Component({
  selector: 'dynamic-form-field',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    TagSelectComponent,
    FieldsPipe
],
  templateUrl: './dynamic-form-field.component.html',
  styleUrl: './dynamic-form-field.component.scss',
})
export class DynamicFormFieldComponent {
  field = input.required<FieldBase<unknown>>();
  form = input.required<FormGroup>();
}
