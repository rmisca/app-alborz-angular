import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlborzSpinnerComponent } from './alborz-spinner.component';

describe('AlborzSpinnerComponent', () => {
  let component: AlborzSpinnerComponent;
  let fixture: ComponentFixture<AlborzSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlborzSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlborzSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
