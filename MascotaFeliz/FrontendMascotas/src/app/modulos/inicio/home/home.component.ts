import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'comentario':['',[Validators.required]],
    'email':['',[Validators.required,Validators.email]],
    'telefono':['',[Validators.required,Validators.maxLength(11),Validators.minLength(10)]],
        
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }

  
 RegistrarMesaje(){

  let nombre = this.fgValidador.controls['nombre'].value;
  let apellido = this.fgValidador.controls['apellido'].value;
  let correo =this.fgValidador.controls['email'].value;
  let telefono = this.fgValidador.controls['telefono'].value;
  let mensaje = this.fgValidador.controls['comentario'].value;
   

  let url = `http://localhost:3000/prospectos`;
  let datos = {

      nombre: nombre,
      apellido: apellido,
      correo: correo,
      celular: telefono,
      comentario:mensaje,
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