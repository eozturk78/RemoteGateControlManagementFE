import { ManagementService } from './../../../services/user/management.service';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MessageTemplatelListEP } from 'src/app/model/system/message-template-model';

@Component({
  selector: 'app-message-templates',
  templateUrl: './message-templates.component.html',
  styleUrls: ['./message-templates.component.scss']
})
export class MessageTemplatesComponent implements OnInit {

  messageTemplateList: MessageTemplatelListEP | undefined;

  constructor(private systemService: ManagementService, private router:Router) {
  }

  ngOnInit(): void {
    this.systemService
      .getMessageTemplates()
      .subscribe((data) => {
        this.messageTemplateList = data;
      })
  }

  onOpenDetail(messageTemplateId?: string) {
    this.router.navigate(['/main/message-template-detail', messageTemplateId])
  }
}
