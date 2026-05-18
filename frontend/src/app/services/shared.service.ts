import { Injectable } from '@angular/core';
import { signal  } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 token = signal<string | null>(
    localStorage.getItem('token')
  );
  constructor() { }

   setToken(tokenValue: string) {

    localStorage.setItem('token', tokenValue);

    this.token.set(tokenValue);

  }

  removeToken() {

    localStorage.removeItem('token');

    this.token.set(null);

  }
}
