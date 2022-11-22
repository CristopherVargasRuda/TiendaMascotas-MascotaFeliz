import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-plan',
  templateUrl: './nuevo-plan.component.html',
  styleUrls: ['./nuevo-plan.component.css']
})
export class NuevoPlanComponent implements OnInit {

  mensaje:string='';

  fgPlanes: FormGroup=this.fb.group({
    'nombre':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    'precio':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  }
  agregarPlan(){
const nombre = this.fgPlanes.controls['nombre'].value;
const descripcion = this.fgPlanes.controls['descripcion'].value;
const precio =this.fgPlanes.controls['precio'].value;
const url =`http://localhost:3000/planes`;
const datos={
  nombre:nombre,
  descripcion:descripcion,
  precio:precio
};
fetch(url,{
  method:'POST',
  body: JSON.stringify(datos),
  headers:{
    'Content-Type':'application/json'
  }
}).then(res=>res.json()).then(
  plan=>{
    if(plan.precio){
      this.mensaje="El plan se guardo correctamente"
    }else{
      this.mensaje="por favor verificar los los datos ingresados o consulte con su administrador"
    }
  }
)

this.fgPlanes.reset();




  }
  borrarMensaje(){
this.mensaje=''
  }

}
