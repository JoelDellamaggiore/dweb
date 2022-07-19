import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';

import { NuevoJugadorComponent } from './components/nuevo-jugador/nuevo-jugador.component';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import { NuevaDisciplinaComponent } from './components/nueva-disciplina/nueva-disciplina.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nuevo-jugador', component: NuevoJugadorComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'disciplina', component: DisciplinasComponent },
  { path: 'nueva-disciplina', component: NuevaDisciplinaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
