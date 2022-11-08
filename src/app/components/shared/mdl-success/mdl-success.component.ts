import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdl-success',
  templateUrl: './mdl-success.component.html',
  styleUrls: ['./mdl-success.component.scss']
})
export class MdlSuccessComponent implements OnInit {

  @Input() messageText?:string;
  constructor() { }

  ngOnInit(): void {
  }

}
