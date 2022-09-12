import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeConponentComponent } from './practice-conponent.component';

describe('PracticeConponentComponent', () => {
  let component: PracticeConponentComponent;
  let fixture: ComponentFixture<PracticeConponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeConponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeConponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
