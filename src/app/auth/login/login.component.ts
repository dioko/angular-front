import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  password?: boolean;

  constructor(private _formBuilder: FormBuilder,) {
    this.form = this._formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      showPassword:  [false],
    });
  }

  ngOnInit(): void {
    this.password = false
  }

  passwordEvent($event: any){
    const isChecked = $event.target.checked;
    this.form.controls['showPassword'].setValue($event.target.checked);
  }

  login(){
    const form = {
      username: this.form.value.username,
      password: this.form.value.password
    }
    console.log('Login ->',form)
    this.form.reset()
  }
}
