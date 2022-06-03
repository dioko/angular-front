import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient,
  ) { }

  getCuentas() {
    return this._http.get(`${environment.apiUrl}/cuentas`);
  }

  getCuentaById(id: number) {
    return this._http.get(`${environment.apiUrl}/cuentas/${id}`);
  }

  saveCuenta(cuenta: any) {
    return this._http.post(`${environment.apiUrl}/cuentas`, cuenta);
  }

  updateCuenta(cuenta: any, id: number) {
    return this._http.put(`${environment.apiUrl}/cuentas/${id}`, cuenta);
  }

  logicalDeleteCuenta(id: number) {
    return this._http.patch(`${environment.apiUrl}/cuentas/${id}`,{});
  }

  deleteCuenta(id: number) {
    return this._http.delete(`${environment.apiUrl}/cuentas/${id}`);
  }
}
