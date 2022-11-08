import { ManagementService } from './../../../services/user/management.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType, MessageAccountResponse } from 'src/app/model/system/message-account-model';

@Component({
  selector: 'app-message-accounts',
  templateUrl: './message-accounts.component.html',
  styleUrls: ['./message-accounts.component.scss']
})
export class MessageAccountsComponent implements OnInit {
  accountType = null;
  searchText = null;
  messageAccountList: Array<MessageAccountResponse> | undefined;
  accountTypeList: Array<AccountType> | undefined
  constructor(private systemService: ManagementService, private router:Router) {
  }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch(){
    this.systemService
      .getMessageAccounts()
      .subscribe((data) => {
        this.messageAccountList = data.records;
      })
  }
  onOpenDetail(messageAccountId?: string) {
    this.router.navigate(['/main/message-account-detail', messageAccountId])
  }
}
