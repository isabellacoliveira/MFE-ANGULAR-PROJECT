import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './../modal/modal.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongCardComponent } from './song-card.component';
import { FormComponent } from '../form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { SongServiceService } from 'src/app/services/song-service.service';
import { IMusic } from 'src/app/interfaces/Music';

describe('SongCardComponent', () => {
  let component: SongCardComponent;
  let fixture: ComponentFixture<SongCardComponent>;

  const toastrServiceStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongCardComponent, ModalComponent, FormComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [
        SongServiceService,
        { provide: ToastrService, useValue: toastrServiceStub }
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(SongCardComponent);
    component = fixture.componentInstance;

    // testar a renderização do componente passando um objeto
    const song: IMusic = {
      id: 1,
      title: 'Song Title',
      artist: 'Artist Name',
      image: 'path/to/image.jpg',
      isSaved: false
    };
    component.song = song;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
