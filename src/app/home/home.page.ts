import { Component } from '@angular/core';
import User from '../services/User';
import LoginService from '../services/login.service';
import { debug } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  private user: User;

  updateTitle(){
    this.title = "Nouveau titre";
    this.user = new User('1', 'Duck', 'Daffy', 'Daffy.Duck@gmail.com');
    console.log(this.user.prenom + '\n' + this.user.nom + '\n' + this.user.email);
  }

  constructor(private loginService: LoginService) {}

}
