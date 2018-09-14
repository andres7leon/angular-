import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipoComponent } from './equipo/equipo.component';


//servicios

import { EquipoService } from './service/equipo.service';

const RUTAS:Routes = [
  {path:"", component: InicioComponent},
  {path:"nosotros", component: NosotrosComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"equipo/:id", component: EquipoComponent},
  {path:"**", redirectTo: "/", pathMatch: 'full'}
];

@NgModule({
  declarations: [//js
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    InicioComponent,
    EquipoComponent
  ],
  imports: [//modulos externos
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [//servicios
    EquipoService
  ],
  bootstrap: [AppComponent]//base en donde inicia la app
})
export class AppModule { }
