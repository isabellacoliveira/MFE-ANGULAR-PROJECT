import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { SongServiceService } from 'src/app/services/song-service.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { FormComponent } from 'src/app/components/form/form.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ToastrService } from 'ngx-toastr';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const toastrServiceStub = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, ModalComponent, FormComponent, ButtonComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [
        SongServiceService,
        { provide: ToastrService, useValue: toastrServiceStub }
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set editSongData when editSong is called', () => {
    const song = { id: 1, title: 'Song Title', artist: 'Artist Name', image: 'image-url', isSaved: true };
    component.editSong(song);
    expect(component.editSongData).toEqual(song);
  });
});
