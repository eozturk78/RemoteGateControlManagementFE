import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device, DeviceResponse } from 'src/app/model/device/device-model';
import { ManagementService } from 'src/app/services/user/management.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  searchText?:string;

  page = 1;
  pageSize = 10;
  deviceResp: DeviceResponse | undefined;
  records!: Array<Device>
  constructor(private managementService:ManagementService,
              private router:Router) { }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch(){
    this.managementService
      .getManagementDevices(this.searchText)
      .subscribe((data:DeviceResponse) => {
          this.records = data.records;
      });
  }

  onOpenDetail(userId?: string) {
    this.router.navigate(['/main/device-detail', userId])
  }
}
