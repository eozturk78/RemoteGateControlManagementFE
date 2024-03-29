import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RemoteGateControlManagementFE';

  constructor(private translate: TranslateService){}

  ngOnInit(){
    this.translate.use("tr-TR");
  }
}
