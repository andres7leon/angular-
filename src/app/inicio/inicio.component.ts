import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  title:string = 'hola mundo';

  mostrar:boolean;
  temas:string[];
  claseCss:string;

  constructor(){
  	this.mostrar = true;
  	this.temas = ['html','css','Js','ruby','angular']
  	this.claseCss = 'rojo';
  }

  muestra(){
  	this.mostrar = !this.mostrar;
  }

  cambiaColor(color){
  	this.claseCss = color;
  }

  ngOnInit() {
  }


}
