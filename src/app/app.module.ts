import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelloComponent } from './hello.component';
import { SuccessComponent } from './success/success.component';
import { ResumeComponent } from './success/resume/resume.component';

import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PdfViewerModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'success', component: SuccessComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    SuccessComponent,
    ResumeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
