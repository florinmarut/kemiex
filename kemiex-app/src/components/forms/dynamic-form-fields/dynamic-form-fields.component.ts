import { Component, input } from '@angular/core';
import { FieldBase } from '../../../models/field-base';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-fields',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-fields.component.html',
  styleUrl: './dynamic-form-fields.component.scss',
})
export class DynamicFormFieldsComponent {
  field = input.required<FieldBase<unknown>>();
  form = input.required<FormGroup>();
}
