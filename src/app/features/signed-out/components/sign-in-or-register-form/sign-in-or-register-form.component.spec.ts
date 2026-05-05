import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInOrRegisterFormComponent } from './sign-in-or-register-form.component';

describe('SignInOrRegisterFormComponent', () => {
  let component: SignInOrRegisterFormComponent;
  let fixture: ComponentFixture<SignInOrRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInOrRegisterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInOrRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
