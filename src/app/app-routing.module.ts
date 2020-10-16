import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { OnlineComponent } from './online/online.component';
import { FinderComponent } from './finder/finder.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: FinderComponent},
  { path: 'list', component: ListComponent}, //Added
  { path: 'online', component: OnlineComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
