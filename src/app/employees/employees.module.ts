import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [EmployeesComponent, EmployeeFormComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule]
})
export class EmployeesModule {}
