import { SharedModule } from './../../shared/shared.module';
import { MessageAccountDetailComponent } from './message-account-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MessageAccountDetailComponent
  ],
  imports: [
    RouterModule.forChild(
        [{
          path:'', pathMatch:'full', component: MessageAccountDetailComponent
        }]
    ),
    CommonModule,
    SharedModule
  ]
})
export class MessageAccountDetailModule { }
