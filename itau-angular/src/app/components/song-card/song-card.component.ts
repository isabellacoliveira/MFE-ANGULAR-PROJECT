import { SongServiceService } from 'src/app/services/song-service.service';
import { IMusic } from './../../interfaces/Music/IMusic';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss'],
})
export class SongCardComponent {
  @Input() song: IMusic;
  @Output() songDeleted = new EventEmitter();
  @ViewChild(ModalComponent)
  modal: ModalComponent;
  @ViewChild(FormComponent)
  form: FormComponent;

  constructor() {}

  deleteSong() {
    this.songDeleted.emit();
  }

  closeModal() {
    this.modal.close();
  }

  editSong(){
    this.modal.open();
    this.form.setForm(this.song);
  }
}
