import { Injectable } from '@angular/core';
import { datos } from '../interface/datos';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {
  public list:datos[]=[]
  
  setLista(dato:datos){
    //Se añade el objeto a la lista de empleados
    this.list=[...this.list,{
      nombre:dato.nombre,
      apellidos: dato.apellidos,
      dni:dato.dni,
      departamento:dato.departamento
    }]
    
  }
}
