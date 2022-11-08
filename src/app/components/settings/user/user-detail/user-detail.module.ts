import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { UserDetailComponent } from './user-detail.component';



@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    RouterModule.forChild(
        [{
          path:'', pathMatch:'full', component: UserDetailComponent
        }]
    ),
    CommonModule,
    NgbModule,
    SharedModule
  ]
})
export class UserDetailsModule { }
