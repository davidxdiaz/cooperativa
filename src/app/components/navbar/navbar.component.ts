import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hide=true;
  email = new FormControl('', [Validators.required, Validators.email]);
  //Variables para validar el register
  emailR = new FormControl('', [Validators.required, Validators.email]);
 
  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Necesitas ingresar un valor' :
        this.email.hasError('email') ? 'No es un correo valido' :
            '';
  }

  //Funciones para validar el register
  getErrorMsgEmailR() {
    return this.emailR.hasError('required') ? 'Necesitas ingresar un valor' :
        this.emailR.hasError('email') ? 'No es un correo valido' :
            '';
  }

}
