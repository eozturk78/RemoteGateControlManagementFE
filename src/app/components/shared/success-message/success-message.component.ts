import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../services/base/base.service';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ marginLeft: -200 }),
        stagger('10ms', animate('100ms ease-out', style({ marginLeft: 0 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ marginLeft: -200 })), {
      optional: true,
    }),
  ]),
]);
@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss'],
  animations: [listAnimation],
})
export class SuccessMessageComponent implements OnInit {
  constructor(public base: BaseService) {}
  ngOnInit(): void {}

  clearMessages() {
    this.base.successMessage = [];
  }
}
