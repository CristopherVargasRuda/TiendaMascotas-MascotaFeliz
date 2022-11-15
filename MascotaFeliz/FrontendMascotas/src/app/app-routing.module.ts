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
    path:"**",
    component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
