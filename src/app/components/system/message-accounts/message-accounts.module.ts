import { SharedModule } from 'src/app/components/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageAccountsComponent } from './message-accounts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MessageAccountsComponent],
  imports: [
    RouterModule.forChild(
        [{
          path:'', pathMatch:'full', component: MessageAccountsComponent
        }]
    ),
    CommonModule,
    SharedModule
  ]
})
export class MessageAccountsModule { }
