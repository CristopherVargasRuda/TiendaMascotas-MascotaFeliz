import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {

  listaMascotas:Array<any> = new Array();
  constructor() {
    fetch("http://localhost:3000/mascotas",{
      method: 'get'
  }).then(res => res.json())
  .then(mensaje =>{
    this.listaMascotas=mensaje;
  
  })
   }

  ngOnInit(): void {
  }

}
