import { Component, input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldBase } from '../../../models/field-base';
import { FieldsControlService } from '../../../services/fields-control.service';
import { DynamicFormFieldComponent } from "../dynamic-form-fields/dynamic-form-field.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'dynamic-form',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, DynamicFormFieldComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  fields = input.required<FieldBase<unknown>[]>();
  form!: FormGroup;

  constructor(private fcs: FieldsControlService) {}

  ngOnInit(): void {
    this.form = this.fcs.toFormGroup(this.fields());
  }

  onSubmit() {

  }
}
