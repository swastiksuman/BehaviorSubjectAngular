import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css']
})
export class OneComponentComponent implements OnInit {
  user: string;
  newUser = '';
  employeeList: Employee[];
  constructor(private userService: UserService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.cast.subscribe(employeeList => this.employeeList = employeeList);
    this.userService.cast.subscribe(user => this.user = user);
  }

  doChange(){
    this.userService.editUser(this.newUser);
  }
}
