import { Injectable } from '@angular/core';
import User from './User';

@Injectable({
  providedIn: 'root'
})
export default class LoginService {

  constructor() { }

  login(id: string, mdp:string): User{
    return new User('1','Nom', 'Prénom', 'Email');
  }
}
