import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlapingLabelComponent } from './overlaping-label.component';

describe('OverlapingLabelComponent', () => {
  let component: OverlapingLabelComponent;
  let fixture: ComponentFixture<OverlapingLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlapingLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlapingLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
