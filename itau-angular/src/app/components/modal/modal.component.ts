import { IMusic } from 'src/app/interfaces/Music';
import { FormComponent } from './../form/form.component';
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  isOpen: boolean = false;
  @ViewChild(FormComponent)
  form: FormComponent;

  open() {
    this.isOpen = true;
  }
  
  close() {
    this.isOpen = false;
  }
}
