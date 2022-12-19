import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgregarempleadosComponent } from './agregarempleados.component';
import { MostrarempleadosComponent } from '../mostrarempleados/mostrarempleados.component';
import { FormsModule } from '@angular/forms';
//Módulo que abarca los componentes agregar empleados y mostrar empleados

@NgModule({
  declarations: [
    AgregarempleadosComponent,
    MostrarempleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports:[
    AgregarempleadosComponent,
    MostrarempleadosComponent
  ],
  providers: []
})
export class agregarModule { }
