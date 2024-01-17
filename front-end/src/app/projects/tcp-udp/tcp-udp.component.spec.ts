import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcpUdpComponent } from './tcp-udp.component';

describe('TcpUdpComponent', () => {
  let component: TcpUdpComponent;
  let fixture: ComponentFixture<TcpUdpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcpUdpComponent]
    });
    fixture = TestBed.createComponent(TcpUdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
