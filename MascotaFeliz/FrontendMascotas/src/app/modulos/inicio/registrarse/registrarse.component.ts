import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {


  formularioCliente:FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'documento':['',[Validators.required]],
    'email':['',[Validators.required,Validators.email]],
    'telefono':['',[Validators.required,Validators.maxLength(11),Validators.minLength(10)]],
        
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  registrarCliente(){
    
    let nombre = this.formularioCliente.controls['nombre'].value;
    let apellido = this.formularioCliente.controls['apellido'].value;
    let correo =this.formularioCliente.controls['email'].value;
    let telefono = this.formularioCliente.controls['telefono'].value;
    let documento = this.formularioCliente.controls['documento'].value;

    let url = `http://localhost:3000/usuarios`;
    let datos = {
        cedula:documento,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        correo: correo,
        rol:"Cliente"
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
  }
  

}
