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

const RUTAS:Routes = [
  {path:"", component: InicioComponent},
  {path:"nosotros", component: NosotrosComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"**", redirectTo: "/", pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
