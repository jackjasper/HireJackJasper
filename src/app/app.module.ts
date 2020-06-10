import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelloComponent } from './hello.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'success', component: SucessComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
