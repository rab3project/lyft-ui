import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
<<<<<<< HEAD
import { SignUpComponent } from './sign-up/sign-up.component';


=======
import { SignupComponent } from './signup/signup.component';
>>>>>>> 9c15425a6f8ba563cb8f252e5b86a69028fc137c


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
<<<<<<< HEAD
  {path: 'signUp', component: SignUpComponent},

=======
  {path: 'signup', component: SignupComponent},
>>>>>>> 9c15425a6f8ba563cb8f252e5b86a69028fc137c


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
