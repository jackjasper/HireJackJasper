import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelloComponent } from './hello.component';
import { SuccessComponent } from './success/success.component';
import { ResumeComponent } from './success/resume/resume.component';
import { CoverLetterComponent } from './success/cover-letter/cover-letter.component';
import { AboutComponent } from './success/about/about.component';

import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PdfViewerModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'success', component: SuccessComponent },
      { path: 'success/resume', component: ResumeComponent },
      { path: 'success/cover-letter', component: CoverLetterComponent },
      { path: 'success/about', component: AboutComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    SuccessComponent,
    ResumeComponent,
    CoverLetterComponent,
    AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
