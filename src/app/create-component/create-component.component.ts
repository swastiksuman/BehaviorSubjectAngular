import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  id = '';
  name = '';
  designation = '';
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  doAdd(){
    this.employeeService.addNewEmployee({id: this.id, name: this.name, designation: this.designation});
  }
}
