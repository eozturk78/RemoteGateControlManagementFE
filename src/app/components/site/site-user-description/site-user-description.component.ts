import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { RepUserListModel } from 'src/app/model/report/rep-user-list';
import { SiteUserResponse } from 'src/app/model/site/site-user-model';
import { ManagementService } from 'src/app/services/user/management.service';

@Component({
  selector: 'app-site-user-description',
  templateUrl: './site-user-description.component.html',
  styleUrls: ['./site-user-description.component.scss']
})
export class SiteUserDescriptionComponent implements OnInit {

  submitted = false;
  @Input() user!: RepUserListModel;
  @Output()  savedSiteUserDescription: EventEmitter<any> = new EventEmitter();
  form = new FormGroup({
    userId: new FormControl(null),
    description: new FormControl(""),
  });
  constructor(private managmentService: ManagementService,
              private modalService: BsModalService) { }

  get f() {
    return this.form?.controls;
  }
  ngOnInit(): void {
    console.log(this.user);
    const p ={
      userId: this.user.userId,
      description: this.user.description
    }
    console.log(p);
    this.form.setValue(p);
  }
  onSubmit(){
    this.managmentService.updateSiteUserDescription(this.form.value)
      .subscribe((data: object) =>{
        console.log(data);
        this.onSubmitCompleted(data);
      });
  }

  onSubmitCompleted(data:any){
    this.savedSiteUserDescription.emit(data);
  }

  close(){
    this.modalService.hide();
  }

}
