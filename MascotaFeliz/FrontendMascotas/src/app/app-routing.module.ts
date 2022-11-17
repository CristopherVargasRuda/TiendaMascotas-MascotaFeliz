import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';

const routes: Routes = [

  {
    path:"",
    loadChildren:()=> import("./modulos/inicio/inicio.module").then(x=>x.InicioModule)
  },
  {
    path:"inicio",
    loadChildren:()=> import("./modulos/inicio/inicio.module").then(x=>x.InicioModule)
  },
  {
    path:"cliente",
    loadChildren:()=>import("./modulos/cliente/cliente.module").then(x=>x.ClienteModule)
  },
  {
    path:"administrador",
    loadChildren:()=>import("./modulos/administrador/administrador.module").then(x=>x.AdministradorModule)
  },
  {
    path:"**",
    component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
