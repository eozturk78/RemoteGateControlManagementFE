import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SiteUserResponse } from 'src/app/model/site/site-user-model';
import { ManagementService } from 'src/app/services/user/management.service';

@Component({
  selector: 'app-site-user-details',
  templateUrl: './site-user-details.component.html',
  styleUrls: ['./site-user-details.component.scss']
})
export class SiteUserDetailsComponent implements OnInit {

  submitted = false;
  @Input() siteUserId!: string
  @Input() siteId!: string
  @Output()  savedSiteManager: EventEmitter<any> = new EventEmitter();
  form = new FormGroup({
    siteUserId: new FormControl(null),
    siteId: new FormControl(null),
    email: new FormControl("", [Validators.required]),
    userTitle: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required]),
  });
  constructor(private managmentService: ManagementService,
              private modalService: BsModalService) { }

  get f() {
    return this.form?.controls;
  }
  ngOnInit(): void {
    this.form.controls['siteId'].setValue(this.siteId);
    this.form.controls['siteUserId'].setValue(this.siteUserId);
    this.managmentService.getSiteUserDetail(this.siteUserId)
      .subscribe((data:SiteUserResponse)=>{
        if(data.records!=null) this.form.setValue(data.records[0]);
      });
  }
  onSubmit(){
    this.managmentService.postSiteUser(this.form.value)
      .subscribe((data: SiteUserResponse) =>{
        this.onSubmitCompleted(data);
      });
  }

  onSubmitCompleted(data:any){
    this.savedSiteManager.emit(data);
  }


  onDelete(){
    this.managmentService.deleteSiteUser(this.siteUserId)
      .subscribe((data: SiteUserResponse) =>{
        this.onSubmitCompleted(data);
      });
  }
}
