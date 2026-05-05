import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInOrRegisterForm } from './sign-in-or-register-form';

describe('SignInOrRegisterForm', () => {
  let component: SignInOrRegisterForm;
  let fixture: ComponentFixture<SignInOrRegisterForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInOrRegisterForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInOrRegisterForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
