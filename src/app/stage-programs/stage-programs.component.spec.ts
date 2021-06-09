import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageProgramsComponent } from './stage-programs.component';

describe('StageProgramsComponent', () => {
  let component: StageProgramsComponent;
  let fixture: ComponentFixture<StageProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
