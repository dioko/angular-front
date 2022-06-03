import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  password?: boolean;
  accounts: any;
  showAccounts = false;
  accountFind: any;
  accountId: number = 0;
  accountIdPatch: number = 0;
  accountIdDelete: number = 0;
  responsePatch: any;
  responseDelete: any;

  constructor(private _formBuilder: FormBuilder,    private _userService: UserService,
  ) {
    this.form = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      isActiva: [true],
      id_cuenta: [0]
    });
  }

  getCuentas(){
    this._userService.getCuentas().subscribe((response: any) => {
      console.log(response)
      this.accounts = response
      this.showAccounts = !this.showAccounts
    }, (error) => {
      console.log(error)
    });
  }

  getCuentaById(){
    console.log(this.accountId)
    this._userService.getCuentaById(this.accountId).subscribe((response: any) => {
      console.log(response)
      this.accountFind = response
    }, (error) => {
      console.log(error)
    });
  }

  saveCuenta(){
    this._userService.saveCuenta(this.form.value).subscribe((response: any) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    });
  }

  updateCuenta(cuenta: any, id: number){
    this._userService.updateCuenta(cuenta, id).subscribe((response: any) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    });
  }

  logicalDeleteCuenta(){
    this._userService.logicalDeleteCuenta(this.accountIdPatch).subscribe((response: any) => {
      console.log(response)
      this.responsePatch = response
    }, (error) => {
      console.log(error)
    });
  }

  deleteCuenta(){
    this._userService.deleteCuenta(this.accountIdDelete).subscribe((response: any) => {
      this.responseDelete = response
      console.log(response)
    }, (error) => {
      console.log(error)
    });
  }

  ngOnInit(): void {
    this.password = false
  }

}
