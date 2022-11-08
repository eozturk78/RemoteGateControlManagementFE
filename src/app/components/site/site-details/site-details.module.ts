
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { SiteDetailsComponent } from './site-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SiteDetailsComponent],
  imports: [
    RouterModule.forChild(
      [
        {path: '', pathMatch: 'full', component: SiteDetailsComponent},
      ]
    ),
    CommonModule,
    NgbModule,
    SharedModule
  ]
})
export class SiteDetailsModule { }
