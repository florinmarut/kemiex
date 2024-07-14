import { Injectable } from '@angular/core';
import { FieldBase } from '../models/field-base';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FieldsControlService {
  toFormGroup(fields: FieldBase<unknown>[]): FormGroup {
    const group: any = {};

    fields.forEach((field) => {
      group[field.key] = new FormControl(field.value || '');
    });

    return new FormGroup(group);
  }
}
