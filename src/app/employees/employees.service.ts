import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "./employee";

// HttpClient
// => HttpClientModule

const API_URL = "http://5a5a9e00bc6e340012a03796.mockapi.io/employees";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  public findAll() {
    return this.http.get<Employee[]>(API_URL);
  }

  public find(id: number) {
    return this.http.get<Employee>(API_URL + "/" + id);
  }

  public update(employee: Employee) {
    return this.http.put(API_URL + "/" + employee.id, employee);
  }

  public create(employee: Employee) {
    return this.http.post(API_URL, employee);
  }

  public delete(id: number) {
    return this.http.delete(API_URL + "/" + id);
  }
}
