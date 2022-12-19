import { Component } from '@angular/core';
import { ServicioEmpleadosService } from '../service/servicio-empleados.service';
import { datos } from '../interface/datos';

@Component({
  selector: 'app-mostrarempleados',
  templateUrl: './mostrarempleados.component.html',
  styleUrls: ['./mostrarempleados.component.css']
})
export class MostrarempleadosComponent {
  public datosEmple:datos;
  constructor(public servicioEmpleadosService:ServicioEmpleadosService){
    this.datosEmple={
      nombre:"",
      apellidos:"",
      dni:"",
      departamento:""
    }
  }
  
  agregarCaracteristica(i:datos,item:number){
    //Se actualiza el atributo opcional de característica al darle click a agregar
    //Se actualiza la lista con el nuevo dato a través del parámetro i e item que recorren la lista con el ngFor
    this.servicioEmpleadosService.list[item]={
      nombre:i.nombre,
      apellidos:i.apellidos,
      dni:i.dni,
      departamento:i.departamento,
      caracteristica:this.datosEmple.caracteristica
    }
    console.log(this.servicioEmpleadosService.list[item].caracteristica)
    console.log(this.servicioEmpleadosService.list)
  }
  
}
