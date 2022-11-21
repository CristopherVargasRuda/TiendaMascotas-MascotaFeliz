import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { IndexComponent } from './index/index.component';
import { NuevoPlanComponent } from './nuevo-plan/nuevo-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarMascotaComponent,
    IndexComponent,
    NuevoPlanComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
