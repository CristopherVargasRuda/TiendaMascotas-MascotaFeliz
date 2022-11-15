import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';


@NgModule({
  declarations: [
    AgregarMascotaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
