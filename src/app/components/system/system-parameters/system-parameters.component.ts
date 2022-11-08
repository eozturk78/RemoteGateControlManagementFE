import { ManagementService } from './../../../services/user/management.service';
import {Component, OnInit} from '@angular/core';
import {BaseService} from "../../../services/base/base.service";
import { SystemParametersResponse } from 'src/app/model/system/system-parameters-model';

@Component({
  selector: 'app-system-parameters',
  templateUrl: './system-parameters.component.html',
  styleUrls: ['./system-parameters.component.scss']
})
export class SystemParametersComponent implements OnInit {

  constructor(private systemService: ManagementService, private base: BaseService) {
  }

  active = 0;
  sysParameterList: Array<SystemParametersResponse> = []

  ngOnInit(): void {
    this.systemService.getSystemParameters()
      .subscribe((data:any) => {
        this.sysParameterList = data.Records;
      })
  }

  onSubmit() {
    this.systemService.postSystemParameters(this.sysParameterList)
      .subscribe((data: any) => {
        this.base.successMessage.push("successfully_saved");
      }, err => {});
  }

  onDeleteValue(params:any){
    params.Value = null;
  }
}
