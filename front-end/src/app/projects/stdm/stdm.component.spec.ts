import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdmComponent } from './stdm.component';

describe('StdmComponent', () => {
  let component: StdmComponent;
  let fixture: ComponentFixture<StdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdmComponent]
    });
    fixture = TestBed.createComponent(StdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
