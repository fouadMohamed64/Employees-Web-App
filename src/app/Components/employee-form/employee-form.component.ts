import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  @Input() formMode: 'create' | 'edit' = 'create';
  @Input() initialData: any = null;
  @Output() formSubmit = new EventEmitter<any>();

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      image: ['', Validators.required],
      salary: ['', Validators.required],
    });

    if (this.formMode === 'edit' && this.initialData) {
      this.employeeForm.patchValue(this.initialData);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.formMode === 'edit' && this.initialData && this.employeeForm) {
      this.employeeForm.patchValue({
        name: this.initialData.name,
        email: this.initialData.email,
        image: this.initialData.image,
        salary: this.initialData.salary
      });
    }
  }

  get fControls() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
    this.formSubmit.emit(this.employeeForm.value);
    this.employeeForm.reset();
  }
}
