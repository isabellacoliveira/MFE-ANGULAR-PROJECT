import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  isOpen: boolean;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  open() {
    this.isOpen = true;
    console.log(this.isOpen)
  }

  close() {
    this.isOpen = false;
    this.closeModal.emit();
  }
}
