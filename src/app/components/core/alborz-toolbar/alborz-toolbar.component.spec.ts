import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlborzToolbarComponent } from './alborz-toolbar.component';

describe('AlborzToolbarComponent', () => {
  let component: AlborzToolbarComponent;
  let fixture: ComponentFixture<AlborzToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlborzToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlborzToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
