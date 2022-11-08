import { ManagementService } from './../../../services/user/management.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountType, MessageAccountDetailEP } from 'src/app/model/system/message-account-model';
import { BaseService } from 'src/app/services/base/base.service';
import { MessageTemplateDetailEP } from 'src/app/model/system/message-template-model';

@Component({
  selector: 'app-message-account-detail',
  templateUrl: './message-account-detail.component.html',
  styleUrls: ['./message-account-detail.component.scss']
})
export class MessageAccountDetailComponent implements OnInit {
  accountTypeList: Array<AccountType> | undefined

  form = new FormGroup({
    messageAccountId: new FormControl(null),
    messageAccountName: new FormControl("", [Validators.required]),
    messageAccountType: new FormControl("", [Validators.required]),
    senderName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    number: new FormControl(""),
    server: new FormControl(""),
    userName: new FormControl(""),
    password: new FormControl("", [Validators.required]),
    port: new FormControl("", [Validators.required]),
    useSSL: new FormControl(false),
    domain: new FormControl(""),
  });

  get f() {
    return this.form?.controls;
  }


  messageAccountId: string;

  submitted = false;

  constructor(private systemService: ManagementService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private base: BaseService, private router: Router) {
    this.messageAccountId = this.activatedRoute.snapshot.params['messageAccountId'];
  }


  ngOnInit(): void {
    this.systemService.getMessageAccountDetail(this.messageAccountId)
      .subscribe((data: MessageAccountDetailEP) => {
        this.accountTypeList = data.messageAccountTypes
        if (data.records != null) this.form.setValue(data.records[0]);
      });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.form.invalid) {
      this.systemService.postMessageAccounts(this.form.value)
        .subscribe((data: MessageTemplateDetailEP) => {
          this.router.navigate(['/main/message-accounts']);
        },err=>{

        })
    }
  }


  onDelete() {
    this.systemService.deleteMessageAccount(this.messageAccountId)
      .subscribe((data: any) => {
        this.router.navigate(['/main/message-accounts']);
      });
  }
}
