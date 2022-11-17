import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios:Array<any> = new Array();


  constructor() {
    fetch("http://localhost:3000/usuarios",{
      method: 'get'
  }).then(res => res.json())
  .then(mensaje =>{
    this.listaUsuarios=mensaje;
   
  })



   }

  ngOnInit(): void {
  }

}
