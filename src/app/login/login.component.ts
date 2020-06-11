import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  default = "Enter your access key";
  pwd = "bethebest";

  constructor(private router: Router) { }

  load() {
    var key = (<HTMLInputElement>document.getElementById("login-input")).value
    console.log(key)
    if (key == this.pwd) {
      this.router.navigate(['/success']);
    }
  }
}
