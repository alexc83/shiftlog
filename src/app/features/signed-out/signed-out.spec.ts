import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedOut } from './signed-out';

describe('SignedOut', () => {
  let component: SignedOut;
  let fixture: ComponentFixture<SignedOut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignedOut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignedOut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
