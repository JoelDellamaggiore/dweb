import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { NuevoJugadorComponent } from './nuevo-jugador/nuevo-jugador.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nuevo-jugador', component: NuevoJugadorComponent },
  { path: 'jugadores', component: JugadoresComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
