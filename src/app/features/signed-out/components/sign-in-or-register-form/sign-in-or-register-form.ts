import {Component, inject, input, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in-or-register-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-in-or-register-form.html',
  styleUrl: './sign-in-or-register-form.css',
})
export class SignInOrRegisterForm {

  formType = input<"sign-in" | "sign-up">("sign-in");

  errorMessage = signal<string | null>(null);

  authService = inject(AuthService);
  router = inject(Router);

  signInForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  })

  async onSubmit() {
    const { email, password} = this.signInForm.value;

    if (email && password) {
      try {
        if (this.formType() === "sign-in") {
          const credentials = await this.authService.login(email, password);
        } else {
          const credentials = await this.authService.register(email, password);
        }
        this.router.navigate(['/dashboard']);
      } catch (error) {
        this.errorMessage.set("Invalid credentials, please try again.");
      } finally {
        this.signInForm.reset();
      }
    }
  }

}
