import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  mascotas:Array<any> = new Array();


  constructor() { }

  ngOnInit(): void {
    const identificador = localStorage.getItem('identificador');
    const url = `http://localhost:3000/usuarios/${identificador}/mascotas`
    fetch(url,{
      method:'get'
    }).then(res=>res.json()).then(
      res=>{
        this.mascotas=res;
      }
    )
  }
  

}
