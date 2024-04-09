import { SongServiceService } from './../../services/song-service.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { IMusic } from 'src/app/interfaces/Music';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  subscriptions$ = new Subscription();
  songForm!: FormGroup;
  song: IMusic;
  @Input() editSong: IMusic;
  isEditMode: boolean = false;
  @Output() formModified: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private songService: SongServiceService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  setForm(song: IMusic) {
    this.songForm.setValue({
      title: song.title,
      artist: song.artist,
      image: song.image,
      isSaved: song.isSaved,
    });
    this.editSong = song;
    this.isEditMode = true;
  }

  ngOnInit(): void {
    this.songForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      artist: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      image: ['', [Validators.required]],
      isSaved: false,
    });

    if (this.editSong) {
      this.setForm(this.editSong);
    }
  }

  createSong() {
    this.spinner.show();
    this.subscriptions$.add(
      this.songService.postSongs(this.songForm.value).subscribe({
        next: () => {
          this.toastr.success('Successfully', 'The Song was created successfully!');
          this.songForm.reset();
          this.formModified.emit();
          // this.router.navigate(['/home']);
        },
        complete: () => {
          this.spinner.hide();
        },
        error: (error) => {
          this.toastr.error('Error', 'An error has ocurred' + error);
          this.spinner.hide();
        },
      })
      );
    }

    editSongs() {
      this.spinner.show();
    this.subscriptions$.add(
      this.songService
      .putSong(this.song.id, {
          ...this.editSong,
          id: 1,
          title: this.songForm.get('title')?.value,
          artist: this.songForm.get('artist')?.value,
          image: this.songForm.get('image')?.value,
        })
        .subscribe({
          complete: () => {
            this.toastr.success('Successfully', 'The Song was created successfully!');
            this.spinner.hide();
          },
          error: (error) => {
            this.toastr.error('Error', 'An error has ocurred' + error);
            this.spinner.hide();
          },
        })
    );
  }

  submitForm() {
    if (this.isEditMode) {
      this.editSongs();
    } else {
      this.createSong();
    }
    this.songForm.reset()
  }

  isFormTouched() {
    for (const controlName in this.songForm.controls) {
      if (this.songForm.get(controlName)?.touched) {
        return true;
      }
    }
    return false;
  }

}
