import {Component, signal} from '@angular/core';
import {SignInOrRegisterForm} from './components/sign-in-or-register-form/sign-in-or-register-form';

@Component({
  selector: 'app-signed-out',
  imports: [
    SignInOrRegisterForm,
  ],
  templateUrl: './signed-out.html',
  styleUrl: './signed-out.css',
})
export class SignedOut {

  mode = signal<"sign-in" | "sign-up">("sign-in");

  toggleMode() {
    this.mode.update(mode => mode === "sign-in" ? "sign-up" : "sign-in");
  }
}
