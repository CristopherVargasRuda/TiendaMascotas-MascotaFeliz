import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario:string = 'invitado';
  iniciarSesion:string="login";


  constructor() {
    if(localStorage.getItem('rol')){
      this.iniciarSesion='cerrar sesión';
    }

   }

  ngOnInit(): void {
  }
  cerrarSesion(){
    localStorage.clear();
  }

}
