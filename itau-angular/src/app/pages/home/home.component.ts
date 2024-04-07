import { ModalComponent } from './../../components/modal/modal.component';
import { SongServiceService } from 'src/app/services/song-service.service';
import { IMusic } from './../../interfaces/Music/IMusic';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

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

  constructor(private songService: SongServiceService) {}

  ngOnInit() {
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
    if (confirm(`Are you sure you want to delete ${song.title}?`)) {
      this.songService.deleteSong({ id: song.id }).subscribe(
        () => {
          this.songs = this.songs.filter((item) => item.id !== song.id);
        },
        (error) => {
          console.error('Erro ao excluir música:', error);
        }
      );
    }
  }
}
