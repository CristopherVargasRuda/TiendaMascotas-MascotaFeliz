import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
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

  constructor(private fb:FormBuilder, private router:Router) { }

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
        console.log(mesaje)
      }
    })

  this.intentos ++;
  localStorage.setItem('intentos',this.intentos.toString());

  this.fgSesion.reset();

  const Rol =localStorage.getItem('rol');
  
  if(Rol){
    console.log(Rol);
  }
  }
}