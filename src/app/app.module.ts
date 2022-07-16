import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoJugadorComponent } from './components/nuevo-jugador/nuevo-jugador.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { OverlayModule } from '@angular/cdk/overlay';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';

import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import { NuevaDisciplinaComponent } from './components/nueva-disciplina/nueva-disciplina.component';
import { FormsModule } from '@angular/forms';
import { ModalEditarJugadorComponent } from './components/modal-editar-jugador/modal-editar-jugador.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NuevoJugadorComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JugadoresComponent,
    // ModalEditarJugadorComponent,
    DisciplinasComponent,
    NuevaDisciplinaComponent,
    ModalEditarJugadorComponent,
    FiltroPipe

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    CommonModule,
   
  ],
  providers: [DatePipe,MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
