import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgregarempleadosComponent } from './agregarempleados.component';
import { MostrarempleadosComponent } from '../mostrarempleados/mostrarempleados.component';
import { FormsModule } from '@angular/forms';


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
