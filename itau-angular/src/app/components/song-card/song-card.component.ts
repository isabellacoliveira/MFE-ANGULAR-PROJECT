import { NgxSpinnerService } from 'ngx-spinner';
import { SongServiceService } from 'src/app/services/song-service.service';
import { IMusic } from './../../interfaces/Music/IMusic';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormComponent } from '../form/form.component';
import { Subscription } from 'rxjs';

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
  subscriptions$ = new Subscription();

  constructor(private songService: SongServiceService,  private spinner: NgxSpinnerService) {}

  toggleFavorite() {
    this.song.isSaved = !this.song.isSaved;
    this.spinner.show();

      this.subscriptions$.add(
        this.songService
          .patchSong(this.song.id, {
            isSaved: this.song.isSaved
          })
          .subscribe({
            complete: () => {
              this.spinner.hide();
            },
            error: (err: any) => {
              console.error('Erro ao atualizar música:', err);
              this.spinner.hide();
            }
          })
      );
  }

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
