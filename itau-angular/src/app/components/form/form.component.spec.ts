import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { HttpClientModule } from '@angular/common/http';
import { SongServiceService } from 'src/app/services/song-service.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [SongServiceService]
    }).compileComponents();
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
