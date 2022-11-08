import { ManagementUserResponse } from 'src/app/model/settings/management-user-model';
import { Router } from '@angular/router';
import { ManagementService } from './../../../../services/user/management.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  searchText?: string;
  userResp: ManagementUserResponse | undefined;
  constructor(
    private managementService: ManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch() {
    this.managementService
      .getManagementUsers(this.searchText)
      .subscribe((data: ManagementUserResponse) => {
        this.userResp = data;
      });
  }

  onOpenDetail(userId?: string) {
    this.router.navigate(['/main/user-detail', userId]);
  }
}
