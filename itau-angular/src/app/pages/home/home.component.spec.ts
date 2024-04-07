import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './../../components/form/form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { SongServiceService } from 'src/app/services/song-service.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ModalComponent, FormComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [SongServiceService],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
