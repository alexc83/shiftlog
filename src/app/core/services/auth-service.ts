import {inject, Injectable, signal} from '@angular/core';
import {Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // auth object from Firebase
  private auth = inject(Auth);

  // check if the user is logged in or not
  readonly user$ = authState(this.auth);

  // register user
  async register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // login user
  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // logout user
  async logout() {
    return signOut(this.auth);
  }


}
