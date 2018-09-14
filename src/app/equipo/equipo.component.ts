import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../service/equipo.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

	miebroEquipo:any[];

  constructor(private _equipoServicio:EquipoService, private _ruta:ActivatedRoute) {
  	this.miebroEquipo = [{nombre:"",especialidad:"",bio:""},];
  }

  ngOnInit() {
  	this._ruta.params.subscribe(respuesta => {
  		this.miebroEquipo = this._equipoServicio.verMiembroEquipo(respuesta.id);
  	},
  	error => {
  		console.log("error",error)
  	});
  }


}
