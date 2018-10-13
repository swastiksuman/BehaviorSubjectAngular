import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-two-component',
  templateUrl: './two-component.component.html',
  styleUrls: ['./two-component.component.css']
})
export class TwoComponentComponent implements OnInit {
  user: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.cast.subscribe(user => this.user = user);
  }

}
