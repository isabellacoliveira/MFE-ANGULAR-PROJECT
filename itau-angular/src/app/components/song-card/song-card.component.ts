import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent {
  @Input() title!: string;
  @Input() artist!: string;
  @Input() image!: string;
  constructor() {}
}
