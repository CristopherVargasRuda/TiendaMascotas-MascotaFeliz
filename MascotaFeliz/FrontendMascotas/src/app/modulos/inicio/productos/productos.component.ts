import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() {


   }

  ngOnInit(): void {
    fetch("http://localhost:3000/usuarios",{
      method: 'get'
  }).then(res => res.json())
  .then(mensaje =>{
    console.log(mensaje)
  })
  }

}
