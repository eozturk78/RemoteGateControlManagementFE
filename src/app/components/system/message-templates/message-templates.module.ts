import { SharedModule } from './../../shared/shared.module';
import { MessageTemplatesComponent } from './message-templates.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MessageTemplatesComponent],
  imports: [
    RouterModule.forChild(
        [{
          path:'', pathMatch:'full', component: MessageTemplatesComponent
        }]
    ),
    CommonModule,
    SharedModule
  ]
})
export class MessageTemplatesModule { }
