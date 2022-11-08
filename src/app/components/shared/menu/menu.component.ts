import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base/base.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  userEmail?:string;
  constructor(private base: BaseService, private router: Router) {}

  ngOnInit(): void {
  }
  onLogout() {
    this.base.deleteHandleStorageData('token');
    this.router.navigate(['/']);
  }
  closeMenu() {
    if (window.innerWidth < 768) document.getElementById('menuButton')?.click();
  }
}
