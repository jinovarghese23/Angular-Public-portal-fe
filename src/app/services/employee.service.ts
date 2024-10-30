import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  server_url = "https://angular-public-portal-be.onrender.com";
  constructor(private httpClient: HttpClient) { }

  // add an employee
  addEmployeeApi(employeeDetails: any) {
    return this.httpClient.post(`${this.server_url}/employee`, employeeDetails)
  }

  //get all employees
  getAllEmployeesApi() {
    return this.httpClient.get(`${this.server_url}/employee`)
  }

  // delete an employee 
  deleteEmployeeApi(empId: any) {
    return this.httpClient.delete(`${this.server_url}/employee/${empId}`)
  }

  // get Employee details by Id
  getEmployeeByIdApi(empId: any) {
    return this.httpClient.get(`${this.server_url}/employee/${empId}`)
  }

  // update employee details
  updateEmployee(empId: any, employeeDetails: any) {
    return this.httpClient.put(`${this.server_url}/employee/${empId}`, employeeDetails)
  }

}
