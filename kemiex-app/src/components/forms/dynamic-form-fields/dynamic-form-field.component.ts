import { Component, input } from '@angular/core';
import { FieldBase } from '../../../models/field-base';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TagSelectComponent } from "../../form-controls/tag-select/tag-select.component";

@Component({
  selector: 'dynamic-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TagSelectComponent],
  templateUrl: './dynamic-form-field.component.html',
  styleUrl: './dynamic-form-field.component.scss',
})
export class DynamicFormFieldComponent {
  field = input.required<FieldBase<unknown>>();
  form = input.required<FormGroup>();
}
