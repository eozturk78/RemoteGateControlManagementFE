import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    RouterModule.forChild(
        [{
          path:'', pathMatch:'full', component: ForgotPasswordComponent
        }]
    ),
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ForgotPasswordModule { }
