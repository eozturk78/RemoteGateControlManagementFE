import { SiteUserListComponent } from './../site/site-user-list/site-user-list.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllSiteUserListComponent } from './site-user-list.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AllSiteUserListComponent],
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AllSiteUserListComponent },
    ]),
    CommonModule,
    NgbTooltipModule,
    SharedModule
  ],
})
export class SiteUserListModule {}
