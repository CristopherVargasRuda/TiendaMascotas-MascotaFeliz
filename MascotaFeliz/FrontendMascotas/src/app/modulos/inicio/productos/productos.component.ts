import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

   productos:Array<any>=new Array();

  
  constructor() {
    fetch("http://localhost:3000/productos-servicios",{
      method: 'get'
  }).then(res => res.json())
  .then(mensaje =>{
    this.productos=mensaje;

  })

   }

  ngOnInit(): void {
    console.log(this.productos.length)
  }

}
