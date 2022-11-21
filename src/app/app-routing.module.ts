import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {path: "",component:AbcComponent},
  {path:'email',component:EmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
