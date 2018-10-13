import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css']
})
export class OneComponentComponent implements OnInit {
  user: string;
  newUser = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.cast.subscribe(user => this.user = user);
  }

  doChange(){
    this.userService.editUser(this.newUser);
  }
}
