import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliCComponent } from './cli-c.component';

describe('CliCComponent', () => {
  let component: CliCComponent;
  let fixture: ComponentFixture<CliCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CliCComponent]
    });
    fixture = TestBed.createComponent(CliCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
