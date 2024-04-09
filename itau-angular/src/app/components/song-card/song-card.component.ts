import { NgxSpinnerService } from 'ngx-spinner';
import { SongServiceService } from 'src/app/services/song-service.service';
import { IMusic } from './../../interfaces/Music/IMusic';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormComponent } from '../form/form.component';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss'],
})
export class SongCardComponent {
  @Input() song: IMusic;
  @Output() songToEdit = new EventEmitter();
  @Output() songToDelete = new EventEmitter();
  @ViewChild(ModalComponent)
  modal: ModalComponent;
  @ViewChild(FormComponent)
  form: FormComponent;
  subscriptions$ = new Subscription();
  @Output() isNotFavorite: EventEmitter<void> = new EventEmitter<void>();
  songs: IMusic[];

  constructor(
    private songService: SongServiceService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  toggleFavorite() {
    this.song.isSaved = !this.song.isSaved;
    this.spinner.show();

    this.subscriptions$.add(
      this.songService
        .patchSong(this.song.id, {
          isSaved: this.song.isSaved,
        })
        .subscribe({
          complete: () => {
            this.spinner.hide();
            this.isNotFavorite.emit();
          },
          error: (error) => {
            this.toastr.error('Error', 'An error has ocurred' + error);
            this.spinner.hide();
          },
        })
    );
  }

  closeModal() {
    this.modal.close();
  }

  editSong() {
    this.songToEdit.emit(this.song);
  }
  
  deleteSong() {
    this.songToDelete.emit(this.song);
  }
}
