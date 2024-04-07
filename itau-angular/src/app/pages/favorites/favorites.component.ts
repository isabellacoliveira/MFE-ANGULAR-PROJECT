import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { IMusic } from 'src/app/interfaces/Music';
import { SongServiceService } from 'src/app/services/song-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  subscriptions$ = new Subscription();
  songs: IMusic[] = [];
  constructor(private songService: SongServiceService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.getMusics(); 
  }

  getMusics() {
    this.subscriptions$.add(
      this.songService.getSongs().subscribe({
        next: (data) => {
          this.songs = data.filter(song => song.isSaved === true);
        },
      })
    );
  }
}
