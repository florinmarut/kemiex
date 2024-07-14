import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagSelectComponent } from '../components/form-controls/tag-select/tag-select.component';
import { DynamicFormComponent } from '../components/forms/dynamic-form/dynamic-form.component';
import { FieldBase } from '../models/field-base';
import { FieldsService } from '../services/fields.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TagSelectComponent, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'kemiex-app';
  fields = computed<FieldBase<unknown>[]>(() => {
    return this.fs.getAll()();
  });

  constructor(private fs: FieldsService) {}
  ngOnInit(): void {
    this.fs.addMany([
      new FieldBase<string>({
        key: 'firstname',
        label: 'First name',
        order: 1,
        controlType: 'textbox',
      }),
      new FieldBase<string>({
        key: 'lastname',
        label: 'Last name',
        order: 2,
        controlType: 'textbox',
      }),
      new FieldBase<FieldBase<unknown>[]>({
        key: 'selector',
        label: 'Selector',
        value: [
          new FieldBase<number>({
            key: 'age',
            label: 'Age',
            value: 25,
          }),
          new FieldBase<string>({
            key: 'gender',
            label: 'Gender',
            value: 'M',
          }),
          new FieldBase<string[]>({
            key: 'courses',
            label: 'Courses',
            value: ['Biology', 'Mathematics', 'Computer Science'],
          }),
        ],
        order: 2,
        controlType: 'tagselect',
      }),
    ]);
  }
}
