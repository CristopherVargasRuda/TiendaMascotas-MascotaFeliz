import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AsignarPlanesComponent } from './asignar-planes/asignar-planes.component';


@NgModule({
  declarations: [
    AsignarPlanesComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
