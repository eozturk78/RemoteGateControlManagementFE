import { LoginComponent } from './login.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(
      [
        {path: '', pathMatch: 'full', component: LoginComponent},
      ]
    ),
    CommonModule,
    SharedModule
  ]
})
export class LoginModule { }
