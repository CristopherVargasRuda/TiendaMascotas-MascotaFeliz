import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5';

@Component({

  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {


  fgSesion:FormGroup=this.fb.group({
   'usuario':['',[Validators.required,]],
   'contrasena':['',[Validators.required,]]
  })
  intentos:number=0;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
iniciarSesion(){

  const usuario= this.fgSesion.controls['usuario'].value;
  const contrasena=Md5.hashStr(this.fgSesion.controls['contrasena'].value);

  const url='http://localhost:3000/identificarUsuario';
  const datos = {
    usuario:usuario,
    clave:contrasena
  };
  fetch(url,{
    method:'POST',
    body:JSON.stringify(datos),
    headers:{
      'Content-Type':'application/json'
    }
  }).then(res=>res.json()).then(
    mesaje=>{
      try {
      localStorage['nombre']= mesaje.datos.nombre;
      localStorage['rol']=mesaje.datos.rol;
      localStorage['identificador']=mesaje.datos.id;
      localStorage['tk']=mesaje.tk;
      } catch {
        alert(mesaje)
      }


    })

  this.intentos ++;
  localStorage.setItem('intentos',this.intentos.toString());


  }




}
