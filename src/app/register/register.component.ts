import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: String;
  password: String;

  constructor(public auth: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.email, this.password);
    this.router.navigate(['finder']);
  }

}
