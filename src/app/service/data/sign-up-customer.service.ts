import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignUpCustomerService {

  constructor(
    private htttp: HttpClient
  ) { }
  executeSignUp() {

    return this.htttp.get ('https://jsonplaceholder.typicode.com/users');

  }
}
