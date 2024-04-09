import { ModalComponent } from './../../components/modal/modal.component';
import { SongServiceService } from 'src/app/services/song-service.service';
import { IMusic } from './../../interfaces/Music/IMusic';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormComponent } from 'src/app/components/form/form.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  songs: IMusic[] = [];
  subscriptions$ = new Subscription();
  isOpen: boolean = false;
  @ViewChild(ModalComponent)
  modal: ModalComponent;
  editSongData: IMusic;
  @ViewChild(FormComponent)
  form: FormComponent;

  constructor(
    private songService: SongServiceService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

    this.getMusics();
  }

  openModal() {
    this.modal.open();
    this.editSongData = {} as IMusic;
  }

  closeModal() {
    this.getMusics();
    this.modal.close();
    this.editSongData = {} as IMusic;
  }

  editSong(song: IMusic) {
    this.editSongData = song;
    this.form.setForm(this.editSongData);
    this.modal.open();
  }

  getMusics() {
    this.subscriptions$.add(
      this.songService.getSongs().subscribe({
        next: (data) => {
          this.songs = data;
        },
      })
    );
  }

  deleteMusic(song: IMusic) {
    this.subscriptions$.add(
      this.songService.deleteSong({ id: song.id }).subscribe({
        complete: () => {
          this.toastr.success('Successfully', 'The Song was edited successfully!');
          this.getMusics();
        },
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
