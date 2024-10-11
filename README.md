Created a form which is built dynamically based on a model (FieldBase).
FieldBase is also used within TagSelect component to select the fields which should be later added to the form.
FieldsControl service creates a form group with the specified fields options.
DynamicFormField component builds and displays form controls which will be used in the parent form (TagSelect component can also be used as a form control).
DynamicForm component is the resulting form which is created dynamically.
