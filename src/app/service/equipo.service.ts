import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

	equipo:any[];


  constructor() { 
  
  	this.equipo = [
  		{nombre:"Andres",especialidad:"Desarrollador",bio:"Excelente Desarrollador"},
  		{nombre:"Juan",especialidad:"Test",bio:"Buen Tester"},
  		{nombre:"Maria",especialidad:"Lider de proyectos",bio:"contrala mas de 100 personas"}
  	];

  }

  verEquipo(){

  	return this.equipo;

  }

  verMiembroEquipo(id){

  	return this.equipo[id];

  }

}
