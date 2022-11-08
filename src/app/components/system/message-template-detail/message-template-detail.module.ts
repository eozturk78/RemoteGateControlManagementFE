import { SharedModule } from './../../shared/shared.module';
import { MessageTemplateDetailComponent } from './message-template-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MessageTemplateDetailComponent],
  imports: [
    RouterModule.forChild(
        [{
          path:'', pathMatch:'full', component: MessageTemplateDetailComponent
        }]
    ),
    CommonModule,
    SharedModule
  ]
})
export class MessageTemplateDetailModule { }
