import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-two-component',
  templateUrl: './two-component.component.html',
  styleUrls: ['./two-component.component.css']
})
export class TwoComponentComponent implements OnInit {
  user: string;
  employeeList: Employee[];
  constructor(private userService: UserService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.cast.subscribe(employeeList => this.employeeList = employeeList);
    this.userService.cast.subscribe(user => this.user = user);
  }

}
