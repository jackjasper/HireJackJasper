import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  default = "Enter your access key";

  constructor(private router: Router) { }

  load() {
    this.router.navigate(['/success']);
  }
}
