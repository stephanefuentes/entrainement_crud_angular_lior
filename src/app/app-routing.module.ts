import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeesComponent } from "./employees/employees/employees.component";
import { EmployeeFormComponent } from "./employees/employee-form/employee-form.component";
import { EmployeesModule } from "./employees/employees.module";

const routes: Routes = [
  { path: "", component: EmployeesComponent, pathMatch: "full" },
  { path: "employees/:id", component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeesModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
