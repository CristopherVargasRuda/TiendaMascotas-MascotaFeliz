import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  formularioUsuario:FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'documento':['',[Validators.required]],
    'email':['',[Validators.required,Validators.email]],
    'telefono':['',[Validators.required,Validators.maxLength(11),Validators.minLength(10)]],
    'rol':['Asesor',[Validators.required]]
           
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  registrarUsuario(){
    
    const nombre = this.formularioUsuario.controls['nombre'].value;
    const apellido = this.formularioUsuario.controls['apellido'].value;
    const correo =this.formularioUsuario.controls['email'].value;
    const telefono = this.formularioUsuario.controls['telefono'].value;
    const documento = this.formularioUsuario.controls['documento'].value;
    const rol =this.formularioUsuario.controls['rol'].value

    const url = `http://localhost:3000/usuarios`;
    const datos = {
        cedula:documento,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        correo: correo,
        rol:rol
      };
  
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje =>{
        console.log(mensaje)
    })
    this.formularioUsuario.reset();
  }

}
