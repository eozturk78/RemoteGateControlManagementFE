import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MdlDeleteConfirmComponent } from './mdl-delete-confirm/mdl-delete-confirm.component';
import { MdlSuccessComponent } from './mdl-success/mdl-success.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [
    MdlDeleteConfirmComponent,
    MdlSuccessComponent,
  ],
  exports: [
    MdlDeleteConfirmComponent,
    FormsModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class SharedModule {}
