import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SystemParametersComponent } from './system-parameters.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SystemParametersComponent],
  imports: [
    RouterModule.forChild(
        [{
          path:'', pathMatch:'full', component: SystemParametersComponent
        }]
    ),
    CommonModule,
    NgbModule,
    SharedModule
  ]
})
export class SystemParametersModule { }
