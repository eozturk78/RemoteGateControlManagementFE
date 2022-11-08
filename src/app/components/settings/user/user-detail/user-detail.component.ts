import { ManagementUserResponse } from '../../../../model/settings/management-user-model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/services/base/base.service';
import { ManagementService } from 'src/app/services/user/management.service';
import { MdlSuccessComponent } from 'src/app/components/shared/mdl-success/mdl-success.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  form = new FormGroup({
    userId: new FormControl(null),
    email: new FormControl("", [Validators.required]),
    userTitle: new FormControl("", [Validators.required]),
  });
  userId: string;
  submitted: boolean = false;
  get f() {
    return this.form?.controls;
  }

  constructor(private systemService: ManagementService,
              private activatedRoute: ActivatedRoute,
              private base: BaseService,
              private router: Router,
              private modalService: BsModalService) {
    this.userId = this.activatedRoute.snapshot.params['userId'];
  }

  ngOnInit(): void {
    this.systemService.getManagementUserDetail(this.userId)
      .subscribe((data: ManagementUserResponse) => {
        if (data.records != null) this.form.setValue(data.records[0]);
      });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.form.invalid) {
      this.systemService.postManagementUser(this.form.value)
        .subscribe((data: ManagementUserResponse) => {
          this.router.navigate(['/main/users']);
        },err=>{

        })
    }
  }
  resendPasswordEmail() {
    this.submitted = true;
    if (!this.form.invalid) {
      this.systemService.postResentPasswordEmail(this.userId)
        .subscribe((data: ManagementUserResponse) => {
          this.modalService.show(MdlSuccessComponent, {
            ariaLabelledBy: 'modal-basic-title',
            class: 'mdl-for-small-size',
            backdrop: 'static',
            keyboard: true,
            initialState: {
              messageText: "message_send_successfully"
            }});
        },err=>{

        })
    }
  }


  onDelete() {
    this.systemService.deleteManagementUser(this.userId)
      .subscribe((data: any) => {
        this.router.navigate(['/main/users']);
      });
  }
}
