import { Injectable } from '@angular/core';
import { FieldBase } from '../models/field-base';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FieldsService {
  fields = signal<FieldBase<unknown>[]>([]);

  add(field: FieldBase<unknown>): void {
    this.fields.update((fields) => [...fields, field]);
  }

  addMany(inputFields: FieldBase<unknown>[]): void {
    this.fields.update((fields) => [...fields, ...inputFields]);
  }

  getAll() {
    return this.fields;
  }

  remove(field: FieldBase<unknown>): void {
    this.fields.update((fields) => {
      const index = fields.indexOf(field);
      if (index < 0) {
        return fields;
      }

      fields.splice(index, 1);
      return [...fields];
    });
  }
}
