import { TemaComponent } from './tema/tema.component';
import { InicioComponent } from './inicio/inicio.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},

  {path:'inicio', component: InicioComponent},
  {path: 'tema', component: TemaComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
