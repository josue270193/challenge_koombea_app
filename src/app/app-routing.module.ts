import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from "./component/login-form/login-form.component";
import {RegisterFormComponent} from "./component/register-form/register-form.component";
import {ScrapperListComponent} from "./component/scrapper-list/scrapper-list.component";

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'scrapper', component: ScrapperListComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
