import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../employee.model';

@Injectable()
export class EmployeeService {
  private employeeList = new BehaviorSubject<Employee[]>([]);
  cast = this.employeeList.asObservable();

  constructor() {
    const initEmployeeList: Employee[] = [{id: '1', name: 'Swastik', designation: 'Lead'}, {id: '2', name: 'Shankar', designation: 'AGM'}];
    this.employeeList.next([...initEmployeeList]);
   }

  addNewEmployee(newEmployee: Employee) {
    this.employeeList.getValue().push(newEmployee);
  }
}
