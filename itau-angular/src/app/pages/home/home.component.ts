import { ModalComponent } from './../../components/modal/modal.component';
import { SongServiceService } from 'src/app/services/song-service.service';
import { IMusic } from './../../interfaces/Music/IMusic';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  songs: IMusic[] = [];
  subscriptions$ = new Subscription();
  @ViewChild('myModal') myModal: ModalComponent;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(private songService: SongServiceService) {}

  ngOnInit(){
    this.getMusics();
  }

  openModal() {
    console.log('oi')
    this.myModal.open();
  }

  handleCloseModal() {
    this.myModal.close();
  }

  getMusics() {
    this.subscriptions$.add(
      this.songService
        .getSongs()
        .subscribe({
          next: (data) => {
            this.songs = data;
            console.log(data)
          }
        })
    );
  }
}
