import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ResumeComponent} from './resume/resume.component';

@Component({
  selector: 'success-component',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  name = "*"
}
