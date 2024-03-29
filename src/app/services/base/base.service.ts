import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable, ElementRef } from '@angular/core';
import { LocalstorageService } from '../local-storage-service/storage-service.service';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  publicTable:ElementRef | undefined;
  public isError = false;
  public errorMessage: string[] = [];
  public successMessage: string[] = [];
  private localstorageService =  new LocalstorageService();
  page = 1;
  constructor( ) {
  }

  // -- Double number
  doubleNumberMaskSettings = createNumberMask({
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: '',
    decimalLimit: 4,
    allowDecimal: true,
    allowNegative: false,
  });
  public doubleNumber = this.doubleNumberMaskSettings;

  parseDateToModel(date: string): NgbDate{
    let dateArray = date.split('-');
    let dateResult: NgbDate = {
      year: parseInt(dateArray[0]),
      month: parseInt(dateArray[1]),
      day: parseInt(dateArray[2]),
      equals: function (other?: NgbDateStruct | null | undefined): boolean {
        throw new Error('Function not implemented.');
      },
      before: function (other?: NgbDateStruct | null | undefined): boolean {
        throw new Error('Function not implemented.');
      },
      after: function (other?: NgbDateStruct | null | undefined): boolean {
        throw new Error('Function not implemented.');
      }
    }
    return dateResult
  }

  parseDateToString(date: Date): string{
    const year = date.getFullYear();
    const day = date.getDate().toString().length == 1 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth().toString().length == 1 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
    let dateResult: string =     day + '/' + month + '/'+ year;
    return dateResult
  }


  parseGetTimeFromDate(date: string): string{
    let dateArray = date.split('T');
    let resultTimeString = dateArray[1].toString().substring(0,5);
    return resultTimeString
  }


  parseDate(date?: NgbDate): string{
    if(date == null) return "";
    const year = date.year;
    const day = date.day.toString().length == 1 ? '0' + date.day : date.day;
    const month = date.month.toString().length == 1 ? '0' + date.month : date.month;
    return `${year}-${month}-${day}`
  }

  addMinutesToDate(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes * 60000);
  }

  // -- Set Data From Local Storage
  setHandleStorageData(key: any, value: any) {
    this.localstorageService.setItem(key, value);
  }

  // -- Get Data From Local Storage
  getHandleStorageData(key: any) {
    return this.localstorageService.getItem(key) ?? "";
  }

  // -- Get Data From Local Storage
  deleteHandleStorageData(key: any) {
    return this.localstorageService.removeItem(key);
  }

  prepareMobileTable() {
    if (this.publicTable != null) {
      const tableEl = this.publicTable.nativeElement;
      if (tableEl != null) {
        const thEls = tableEl.querySelectorAll('thead th');
        const tdLabels = Array.from(thEls).map((el: any) => el.innerText);
        tableEl.querySelectorAll('tbody tr').forEach((tr:any) => {
          Array.from(tr.children).forEach(
            (td: any, ndx) => {
              td.setAttribute('label', tdLabels[ndx]);
            }
          );
        });
      }
    }
  }
}

