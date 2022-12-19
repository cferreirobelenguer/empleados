import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { agregarModule } from './agregarempleados/agregarempleados.module';
import { ServicioEmpleadosService } from './service/servicio-empleados.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    agregarModule
  ],
  providers: [ServicioEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
