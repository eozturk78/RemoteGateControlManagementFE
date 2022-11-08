import { BaseService } from 'src/app/services/base/base.service';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SiteManagerResponse } from 'src/app/model/site/site-manager-model';
import { ManagementService } from 'src/app/services/user/management.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdlSuccessComponent } from '../../shared/mdl-success/mdl-success.component';

@Component({
  selector: 'app-site-manager-details',
  templateUrl: './site-manager-details.component.html',
  styleUrls: ['./site-manager-details.component.scss'],
})
export class SiteManagerDetailsComponent implements OnInit {
  submitted = false;
  @Input() siteManagerId!: string;
  @Input() siteId!: string;
  @Output() savedSiteManager: EventEmitter<any> = new EventEmitter();
  form = new FormGroup({
    siteManagerId: new FormControl(null),
    siteId: new FormControl(null),
    email: new FormControl('', [Validators.required]),
    userTitle: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  });
  constructor(
    private managmentService: ManagementService,
    private modalService: BsModalService,
    private base: BaseService
  ) {}

  get f() {
    return this.form?.controls;
  }
  ngOnInit(): void {
    this.form.controls['siteId'].setValue(this.siteId);
    this.form.controls['siteManagerId'].setValue(this.siteManagerId);
    this.managmentService
      .getSiteManagerDetail(this.siteManagerId)
      .subscribe((data: SiteManagerResponse) => {
        if (data.records != null) this.form.setValue(data.records[0]);
      });
  }
  onSubmit() {
    this.managmentService
      .postSiteManager(this.form.value)
      .subscribe((data: SiteManagerResponse) => {
        this.onSubmitCompleted(data);
      });
  }

  onSubmitCompleted(data: any) {
    this.savedSiteManager.emit(data);
  }

  resendPasswordEmail() {
    this.managmentService
      .postResentPasswordEmail(this.siteManagerId)
      .subscribe((data: any) => {
        this.modalService.hide();
        this.base.successMessage.push("successfully_saved")
      });
  }

  onDelete() {
    this.managmentService
      .deleteSiteManager(this.siteManagerId)
      .subscribe((data: SiteManagerResponse) => {
        this.onSubmitCompleted(data);
      });
  }
}
