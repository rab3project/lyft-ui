import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  title = 'Please choose the type of login !!';
  
  inlineCss={
   'color':'black',
   'backgroundColor' :'grey'
}
  showValue(Uname){
    console.log(Uname);
  }

}
