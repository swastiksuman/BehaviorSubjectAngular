import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  private user = new BehaviorSubject<string>('Swastik');
  cast = this.user.asObservable();
  constructor() { }

  editUser(newUser){
    this.user.next(newUser);
  }
}
