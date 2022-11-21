import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { IndexComponent } from './index/index.component';
import { NuevoPlanComponent } from './nuevo-plan/nuevo-plan.component';

const routes: Routes = [
{
  path:"",
  component:IndexComponent
},
{
  path: "mascota-nueva",
  component:AgregarMascotaComponent
},
{
  path:"nuevo-plan",
  component:NuevoPlanComponent
},
{
  path:"agregar-mascota",
  component:AgregarMascotaComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
