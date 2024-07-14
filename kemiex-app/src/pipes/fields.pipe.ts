import { Pipe, PipeTransform } from '@angular/core';
import { FieldBase } from '../models/field-base';

@Pipe({
  name: 'fields',
  standalone: true,
})
export class FieldsPipe implements PipeTransform {
  transform(value: unknown): FieldBase<unknown>[] {
    if (
      Array.isArray(value) &&
      value.every((item) => item instanceof FieldBase)
    )
      return value as FieldBase<unknown>[];
    return [];
  }
}
