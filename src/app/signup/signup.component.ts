import { Component, OnInit } from '@angular/core';
import { SignUpCustomerService } from '../service/data/sign-up-customer.service';





@Component ({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: SignUpCustomerService
  ) { }

  ngOnInit() {
  }
getSignUp() {
  console.log(this.service .executeSignUp());
  this.service.executeSignUp().subscribe();
}

}
