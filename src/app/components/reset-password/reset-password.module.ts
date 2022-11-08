import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    RouterModule.forChild(
        [{
          path:'', pathMatch:'full', component: ResetPasswordComponent
        }]
    ),
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ResetPasswordModule { }
