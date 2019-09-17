import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "../employees.service";
import { Employee } from "../employee";

@Component({
  selector: "app-employees",
  template: `
    <h1>Les employées</h1>

    <table border="1">
      <tbody>
        <tr *ngFor="let e of employees">
          <td>{{ e.firstName }}</td>
          <td>{{ e.lastName }}</td>
          <td>{{ e.email }}</td>
          <td>
            <a routerLink="/employees/{{ e.id }}">Modifier</a>
            <button (click)="handleDelete(e.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private service: EmployeesService) {}

  ngOnInit() {
    this.service
      .findAll()
      .subscribe(apiEmployees => (this.employees = apiEmployees));
  }

  handleDelete(id) {
    this.service.delete(id).subscribe(
      () => {
        const index = this.employees.findIndex(e => e.id === id);
        this.employees.splice(index, 1);
      },
      () => {
        console.log("Ca a merdé");
      }
    );
  }
}
