import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { IMusic } from 'src/app/interfaces/Music';
import { SongServiceService } from 'src/app/services/song-service.service';
import { DownloadButtonComponent } from 'src/app/components/download-button/download-button.component';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  subscriptions$ = new Subscription();
  songs: IMusic[] = [];
  @ViewChild(DownloadButtonComponent) botoesDownload: DownloadButtonComponent;

  constructor(
    private songService: SongServiceService
  ) {}

  ngOnInit() {
    this.getMusics();
  }

  getMusics() {
    this.subscriptions$.add(
      this.songService.getSongs().subscribe({
        next: (data) => {
          this.songs = data.filter((song) => song.isSaved === true);
        },
      })
    );
  }

  generatePDF() {
    const doc = new jsPDF();
    let yOffset = 10;

    doc.text('Your Favorite Songs List:', 10, yOffset);

    this.songs.forEach((song) => {
      yOffset += 10;
      doc.text(`${song.title} - ${song.artist}`, 10, yOffset);
    });

    doc.save('Favorites.pdf');
  }

  getDownloadRelatorio() {
    this.generatePDF();
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
