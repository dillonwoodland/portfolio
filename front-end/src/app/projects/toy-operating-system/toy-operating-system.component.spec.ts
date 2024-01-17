import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyOperatingSystemComponent } from './toy-operating-system.component';

describe('ToyOperatingSystemComponent', () => {
  let component: ToyOperatingSystemComponent;
  let fixture: ComponentFixture<ToyOperatingSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToyOperatingSystemComponent]
    });
    fixture = TestBed.createComponent(ToyOperatingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
