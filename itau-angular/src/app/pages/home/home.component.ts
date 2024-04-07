import { ModalComponent } from './../../components/modal/modal.component';
import { SongServiceService } from 'src/app/services/song-service.service';
import { IMusic } from './../../interfaces/Music/IMusic';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
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
  }

  closeModal() {
    this.modal.close();
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

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  onSongDeleted(song: IMusic) {
    this.modal.open();

    this.songService.deleteSong({ id: song.id }).subscribe(
      () => {
        this.spinner.show();
        this.songs = this.songs.filter((item) => item.id !== song.id);

        setTimeout(() => {
          this.spinner.hide();
        }, 3000);

        this.toastr.success(
          'Successfully',
          'The Song was deleted successfully!'
        );
      },
      (error) => {
        this.toastr.error('Error', 'An error has ocurred' + error);
      }
    );
  }
}
