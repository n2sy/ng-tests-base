// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = { name: 'nidhal' };
  isLogged = false;

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Data valide`);
      }, 2000);
    });
  }
}
