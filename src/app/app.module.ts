import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoJugadorComponent } from './nuevo-jugador/nuevo-jugador.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ModalEditarJugadorComponent } from './modal-editar-jugador/modal-editar-jugador.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NuevoJugadorComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JugadoresComponent,
    ModalEditarJugadorComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule
  ],
  providers: [DatePipe,MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
