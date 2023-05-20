import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimlaneCardComponent } from './swimlane-card.component';

describe('SwimlaneCardComponent', () => {
  let component: SwimlaneCardComponent;
  let fixture: ComponentFixture<SwimlaneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwimlaneCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimlaneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
