import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { EmployeesService } from "../employees.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "../employee";

@Component({
  selector: "app-employee-form",
  template: `
    <h1>Création d'un employé</h1>

    <form [formGroup]="form" (ngSubmit)="handleSubmit()">
      <input type="text" placeholder="Prénom" formControlName="firstName" />
      <input
        type="text"
        placeholder="Nom de famille"
        formControlName="lastName"
      />
      <input type="email" placeholder="Email" formControlName="email" />

      <button type="submit">Enregistrer</button>
    </form>
  `,
  styles: []
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;
  employee: Employee;

  constructor(
    private service: EmployeesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id != "new") {
      this.service.find(+id).subscribe(apiEmployee => {
        this.employee = apiEmployee;
        this.initializeForm();
      });
    }

    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl("")
    });

    if (this.employee) {
      this.form.setValue({
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        email: this.employee.email
      });
    }
  }

  handleSubmit() {
    if (!this.employee) {
      // Création
      this.service.create(this.form.value).subscribe(
        () => {
          console.log("Bravo");
          this.router.navigateByUrl("/");
        },
        () => {
          console.log("Merde");
        }
      );

      return;
    }

    // Update
    this.service.update({ ...this.employee, ...this.form.value }).subscribe(
      () => {
        console.log("Mise à jour ok");
        this.router.navigateByUrl("/");
      },
      () => {
        console.log("Mise à jour pas ok");
      }
    );
  }
}
