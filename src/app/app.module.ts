import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { SignUpComponent } from './sign-up/sign-up.component';
=======
import { SignupComponent } from './signup/signup.component';
>>>>>>> 9c15425a6f8ba563cb8f252e5b86a69028fc137c

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    HeaderComponent,
<<<<<<< HEAD
    SignUpComponent
=======
    SignupComponent
>>>>>>> 9c15425a6f8ba563cb8f252e5b86a69028fc137c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
