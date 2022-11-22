import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {

  fgMascota:FormGroup = this.build.group({
    'nombre':['',[Validators.required]],
    'especie':['',[Validators.required]],
    'comentario':['',[Validators.required]]

  })

  constructor(private build:FormBuilder) {

   }

  ngOnInit(): void {

  }

  registrarMascota(){
    const nombre =this.fgMascota.controls['nombre'].value;
    const especie =this.fgMascota.controls['especie'].value;
    const comentario= this.fgMascota.controls['comentario'].value;
    const idUsuario= localStorage.getItem('identificador');

    const url ="http://localhost:3000/mascotas";
    const datos= {
      nombre:nombre,
      foto:"foto",
      especie:especie,
      estado:"pendiente",
      comentario:comentario,
      usuarioId:idUsuario
    }
     console.log(datos)

    fetch(url,{
      method:'POST',
      body:JSON.stringify(datos),
      headers:{
          'Content-Type':'application/json'
      }
    })

this.fgMascota.reset();

  }

}
