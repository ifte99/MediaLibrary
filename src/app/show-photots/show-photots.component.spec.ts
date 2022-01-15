import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPhototsComponent } from './show-photots.component';

describe('ShowPhototsComponent', () => {
  let component: ShowPhototsComponent;
  let fixture: ComponentFixture<ShowPhototsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPhototsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPhototsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
