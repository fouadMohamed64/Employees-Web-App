import { Component, inject } from '@angular/core';
import { EmployeeFormComponent } from "../employee-form/employee-form.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


interface Employee {
  name: string;
  email: string;
  image: string;
  salary: number;
}

@Component({
  selector: 'app-employees',
  imports: [EmployeeFormComponent, CommonModule, FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})


export class EmployeesComponent {

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  selectedEmployee: Employee | null = null;
  formMode: 'create' | 'edit' = 'create';
  filterText: string = '';
  router = inject(Router)

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    const data = localStorage.getItem('employees');
    this.employees = data ? JSON.parse(data) : [];
    this.filteredEmployees = this.employees;
  }

  saveToStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Created",
      showConfirmButton: false,
      timer: 1500
    });
  }

  openCreateModal() {
    this.formMode = 'create';
    this.selectedEmployee = null;
  }

  openEditModal(emp: Employee) {
    this.formMode = 'edit';
    this.selectedEmployee = emp;
  }

  handleFormSubmit(data: Employee) {
    if (this.formMode === 'create') {
      this.employees.push(data);
    } else {
      const i = this.employees.findIndex(e => e === this.selectedEmployee);
      if (i > -1) this.employees[i] = data;
    }
    this.saveToStorage();
    this.loadEmployees();
  }

  deleteEmployee(index: number) {
    Swal.fire({
      title: "Are you sure ?",
      text: "You Want To Delete Employee",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees.splice(index, 1);
        this.saveToStorage();
        this.loadEmployees();
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

  onFilter(inputValue:string) {
    this.filterText = inputValue.toLowerCase()
    this.filteredEmployees = this.employees.filter((employee: any) =>
      employee.name.toLowerCase().includes(this.filterText) || employee.email.toLowerCase().includes(this.filterText)
    );
  }

  logout() {
    Swal.fire({
      title: "Are you sure ?",
      text: "You Want To Logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "LogedOut Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['login'])
        localStorage.removeItem('isLogedIn');
      }
    });
  }

}
