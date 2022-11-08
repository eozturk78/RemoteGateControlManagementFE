import {
  StaticTranslationRecords,
  StaticTranslationResponse,
  Translation,
} from './../../../../model/system/static-translation-model';
import { ManagementService } from './../../../../services/user/management.service';
import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/model/system/language-model';
import { BaseService } from 'src/app/services/base/base.service';

@Component({
  selector: 'app-static-translations',
  templateUrl: './static-translations.component.html',
  styleUrls: ['./static-translations.component.scss'],
})
export class StaticTranslationsComponent implements OnInit {
  constructor(
    private managementService: ManagementService,
    private base: BaseService
  ) {}
  page = 1;
  pageSize = 10;
  languageList!: Array<Language>;
  records!: Array<StaticTranslationRecords>;
  allRecords!: Array<StaticTranslationRecords>;
  searchText!: string;
  ngOnInit(): void {
    this.managementService
      .getStaticTranslations()
      .subscribe((data: StaticTranslationResponse) => {
        this.languageList = data.Languages;
        this.records = data.Records;
        this.allRecords = data.Records;
      });
  }

  onDeleteConfirm(i: number) {
    this.allRecords.splice(i, 1);
    this.records.splice(i, 1);
  }
  onAddNewResource() {
    const params: StaticTranslationRecords = {
      ResourceName: '',
      Translations: [],
    };

    this.languageList.forEach((lang) => {
      const langParam: Translation = {
        LanguageId: lang.id,
        Translate: '',
      };
      params.Translations.push(langParam);
    });
    if (this.records == null) {
      this.records = [];
    }
    this.records.unshift(params);
  }

  onSearch() {
    this.records = this.allRecords.filter(x=>x.ResourceName.indexOf(this.searchText)>0);
    this.allRecords.forEach((at) => {
      let isExistInLang = false;
      at.Translations.forEach((t) => {
        if (
          t.Translate != null &&
          t.Translate.toString()
            .toLocaleLowerCase()
            .indexOf(this.searchText.toString().toLocaleLowerCase()) != -1
        ) {
          isExistInLang = true;
        }
      });
      if (isExistInLang) {
        this.records.push(at);
      }
    });
  }

  onSubmit() {
    this.managementService
      .setStaticTranslations(this.allRecords)
      .subscribe((data) => {
        this.base.successMessage.push('successfully_saved');
      });
  }
}
