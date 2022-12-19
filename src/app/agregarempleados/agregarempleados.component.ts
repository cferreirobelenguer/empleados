import { Component } from '@angular/core';
import { datos } from '../interface/datos';
import { ServicioEmpleadosService } from '../service/servicio-empleados.service';

@Component({
  selector: 'app-agregarempleados',
  templateUrl: './agregarempleados.component.html',
  styleUrls: ['./agregarempleados.component.css']
})
export class AgregarempleadosComponent {
  public empleado:datos;
  public list:datos[]=[]
  constructor(private servicioEmpleadosService:ServicioEmpleadosService ){
    this.empleado={
      nombre:"",
      apellidos:"",
      dni:"",
      departamento:""
    }
  }

  agregarDatos(){
    //Se agregan los datos al objeto
    this.empleado={
      nombre:this.empleado.nombre,
      apellidos:this.empleado.apellidos,
      dni:this.empleado.dni,
      departamento:this.empleado.departamento
    }
    console.log(this.empleado)
    //Se agregan el objeto a la lista
    this.servicioEmpleadosService.setLista(this.empleado)
    console.log(this.servicioEmpleadosService.list)
  }
}
