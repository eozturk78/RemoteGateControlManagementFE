import { BsModalService } from 'ngx-bootstrap/modal';
import {Component, OnInit, Output, EventEmitter, Injectable} from '@angular/core';
import {NgbModal, NgbModalConfig, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mdl-delete-confirm',
  templateUrl: './mdl-delete-confirm.component.html',
  styleUrls: ['./mdl-delete-confirm.component.scss']
})
export class MdlDeleteConfirmComponent implements OnInit {

  @Output() confirmDelete: EventEmitter<any> = new EventEmitter<any>();
  private modalRef: NgbModalRef | undefined;

  constructor(config: NgbModalConfig, private modalService: BsModalService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content: any) {
   this.modalService.show(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      keyboard: true
    });
  }

  onConfirm() {
    this.confirmDelete.emit();
    this.onCancel();
  }

  onCancel() {
    this.modalService.hide();
  }

}
