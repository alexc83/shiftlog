import {Component, signal} from '@angular/core';
import {SignInOrRegisterFormComponent} from './components/sign-in-or-register-form/sign-in-or-register-form.component';

@Component({
  selector: 'app-signed-out',
  imports: [
    SignInOrRegisterFormComponent,
  ],
  templateUrl: './signed-out.component.html',
  styleUrl: './signed-out.component.css',
})
export class SignedOutComponent {

  mode = signal<"sign-in" | "sign-up">("sign-in");

  toggleMode() {
    this.mode.update(mode => mode === "sign-in" ? "sign-up" : "sign-in");
  }
}
