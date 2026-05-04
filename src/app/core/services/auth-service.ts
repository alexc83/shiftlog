import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = signal<boolean>(false);

  login = () => {
    this.loggedIn.set(true);
  }

  logout = () => {
    this.loggedIn.set(false);
  }
}
