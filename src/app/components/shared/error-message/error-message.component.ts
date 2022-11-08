import { BaseService } from './../../../services/base/base.service';
import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';


const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({marginLeft: -200}), stagger('10ms', animate('100ms ease-out', style({marginLeft: 0})))],
      {optional: true}
    ),
    query(':leave',
      animate('200ms', style({marginLeft: -200})),
      {optional: true}
    )
  ])
]);

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  animations: [listAnimation]
})
export class ErrorMessageComponent implements OnInit {

  constructor(public base: BaseService) { }

  ngOnInit(): void {
  }


  clearMessages(){
    this.base.errorMessage = [];
  }

}
