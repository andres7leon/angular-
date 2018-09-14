import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../service/equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

	equipo:any[];

  constructor(private _equipoServicio:EquipoService) { //inyectar servicio private _equipoServicio:EquipoService

  		
  	this.equipo = [{nombre:"",especialidad:"",bio:""},];

  }

  ngOnInit() {
  	this.verEquipo();
  }

  verEquipo(){

  	this.equipo = this._equipoServicio.verEquipo();

  }




}
