import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCountButtonComponent } from './signal-count-button.component';

describe('SignalCountButtonComponent', () => {
  let component: SignalCountButtonComponent;
  let fixture: ComponentFixture<SignalCountButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCountButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalCountButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
