import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OneComponentComponent } from './one-component/one-component.component';
import { TwoComponentComponent } from './two-component/two-component.component';
import { UserService } from './service/user.service';
import { CreateComponentComponent } from './create-component/create-component.component';
import { EmployeeService } from './service/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    OneComponentComponent,
    TwoComponentComponent,
    CreateComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
