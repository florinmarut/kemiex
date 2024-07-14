import { Component, input } from '@angular/core';
import { FieldBase } from '../../../models/field-base';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'dynamic-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-field.component.html',
  styleUrl: './dynamic-form-field.component.scss',
})
export class DynamicFormFieldComponent {
  field = input.required<FieldBase<unknown>>();
  form = input.required<FormGroup>();
}
