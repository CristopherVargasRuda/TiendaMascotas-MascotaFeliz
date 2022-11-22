import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  listaPlanes:Array<any>=new Array();

  constructor() { }

  ngOnInit(): void {
    fetch("http://localhost:3000/planes",{
      method: 'get'
  }).then(res => res.json())
  .then(mensaje =>{
    this.listaPlanes=mensaje;

  })

  }

}
