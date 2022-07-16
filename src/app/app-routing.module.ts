import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { NuevoJugadorComponent } from './components/nuevo-jugador/nuevo-jugador.component';


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
