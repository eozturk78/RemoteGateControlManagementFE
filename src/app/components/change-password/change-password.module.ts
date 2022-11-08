import { ChangePasswordComponent } from './change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    RouterModule.forChild(
        [{
          path:'', pathMatch:'full', component: ChangePasswordComponent
        }]
    ),
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ChangePasswordModule { }
