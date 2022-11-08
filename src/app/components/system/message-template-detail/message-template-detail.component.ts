import { ManagementService } from './../../../services/user/management.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BaseService} from "../../../services/base/base.service";
import { MessageAccount, MessageTemplateDetailEP, MessageTemplateType } from 'src/app/model/system/message-template-model';
import { Language } from 'src/app/model/system/language-model';

@Component({
  selector: 'app-message-template-detail',
  templateUrl: './message-template-detail.component.html',
  styleUrls: ['./message-template-detail.component.scss']
})
export class MessageTemplateDetailComponent implements OnInit {
  languageList: Array<Language> | undefined;
  templateTypes: Array<MessageTemplateType> | undefined;
  messageAccounts: Array<MessageAccount> | undefined;
  form = new FormGroup({
    messageTemplateId: new FormControl(null),
    messageTemplateName: new FormControl("", [Validators.required]),
    messageTemplateType: new FormControl("", [Validators.required]),
    messageAccountId: new FormControl("", [Validators.required]),
    subjects: this.fb.array([]),
    messageBodies: this.fb.array([])
  });

  get f() {
    return this.form?.controls;
  }

  get getSubjects(){
    return this.form.get('subjects') as FormArray;
  }
  get getMessageBodies(){
    return this.form.get('messageBodies') as FormArray;
  }

   add = this.form?.get('subjects') as FormArray;
   mb = this.form?.get('messageBodies') as FormArray;

  messageTemplateId: string;

  submitted = false;

  constructor(private systemService: ManagementService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private base: BaseService, private router: Router) {
    this.messageTemplateId = this.activatedRoute.snapshot.params['messageTemplateId'];
  }

  createItem(item: any = null): FormGroup {
    return this.fb.group({
      languageId: item?.id,
      translation: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.systemService.getMessageTemplateDetail(this.messageTemplateId)
      .subscribe((data: MessageTemplateDetailEP) => {
        this.languageList = data.languages;
        this.templateTypes = data.messageTemplateTypes;
        this.messageAccounts = data.messageAccounts;
        if (data.records?.length > 0) {
          const model = data.records[0];
          if(model.subjects !=null)
            model.subjects?.forEach((x: any) => {
              this.add.push(this.createItem());
            });
          else this.fillSubjects();
          if(model.messageBodies!=null)
            model.messageBodies?.forEach((x: any) => {
              this.mb.push(this.createItem());
            });
          else this.fillMessageBodies()
          this.form?.setValue(model);
        }else{
          this.fillMessageBodies()
          this.fillSubjects();
        }

      });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.form.invalid) {
      this.systemService.postMessageTemplates(this.form.value)
        .subscribe((data: MessageTemplateDetailEP) => {
          this.router.navigate(['/main/message-templates']);
        },err=>{

        })
    }
  }

  fnGetLanguageName(language: string) {
    return this.languageList?.filter(x => x.id == language)[0]?.languageName;
  }
  onDelete() {
    this.systemService.deleteMessageTemplate(this.messageTemplateId)
      .subscribe((data: any) => {
        this.router.navigate(['/main/message-templates']);
      });
  }
  fillSubjects(){
    this.languageList?.forEach(l => {
      this.add.push(this.createItem(l));
    });
  }
  fillMessageBodies(){
    this.languageList?.forEach(l => {
      this.mb.push(this.createItem(l));
    });
  }
}
