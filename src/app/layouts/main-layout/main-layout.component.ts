import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseService } from 'src/app/services/base/base.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('body') body!: ElementRef;

  isOpened = false;
  userEmail!:string;
  constructor(private base: BaseService) {}

  ngOnInit(): void {
    this.userEmail = this.base.getHandleStorageData("email");
  }
  onLogOut(){
    this.base.deleteHandleStorageData("email");
    this.base.deleteHandleStorageData("userTitle");
    this.base.deleteHandleStorageData("token");
    window.location.href = "/";
  }

  onMobileOpenMenu(){
    this.isOpened = !this.isOpened
    if(this.isOpened) this.sidebar?.nativeElement.classList.add('active');
    else this.sidebar.nativeElement.classList.remove('active');
  }
  onWebOpenMenu(){
    this.isOpened = !this.isOpened
    document.getElementById('body')?.classList.remove('sidebar-icon-only')
    document.getElementById('body')?.classList.remove('sidebar-hidden')
    if(this.isOpened) document.getElementById('body')?.classList.add('sidebar-icon-only')  //this.body.nativeElement.classList.add();
  //  else document.getElementById('body')?.classList.add('sidebar-hidden') //this.body.nativeElement.classList.add('sidebar-hidden');
  }
}
