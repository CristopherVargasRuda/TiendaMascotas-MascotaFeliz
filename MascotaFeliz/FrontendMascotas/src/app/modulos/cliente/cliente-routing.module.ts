import { NgModule } from '@angular/core';
import { ChildActivationStart, RouterModule, Routes } from '@angular/router';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';

const routes: Routes = [

{
  path: "cliente/nueva-mascota",
  component:AgregarMascotaComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
