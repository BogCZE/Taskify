import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  get isLogged(): boolean {
    return true;
  }
  constructor() { }
}
