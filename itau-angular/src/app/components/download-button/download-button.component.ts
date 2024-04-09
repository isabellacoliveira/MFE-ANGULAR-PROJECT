import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss'],
})
export class DownloadButtonComponent {
  @Output() OnClickApplyPDFButton: EventEmitter<void> =
    new EventEmitter<void>();
}
