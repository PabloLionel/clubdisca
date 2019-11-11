import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  nick = new FormControl('', [Validators.required]);
  hide = true;

  constructor() { }

  ngOnInit() {
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a value'
          : '';
  }

  getErrorMessageNick() {
    return this.password.hasError('required') ? 'You must enter a value'
          : '';
  }
}
