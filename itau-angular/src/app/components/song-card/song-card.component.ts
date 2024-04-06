import { IMusic } from './../../interfaces/Music/IMusic';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent {
  @Input () song!: IMusic;
  constructor() {}
}
