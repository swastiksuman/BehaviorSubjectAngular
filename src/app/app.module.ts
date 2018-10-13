import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OneComponentComponent } from './one-component/one-component.component';
import { TwoComponentComponent } from './two-component/two-component.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    OneComponentComponent,
    TwoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
