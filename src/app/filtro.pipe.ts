import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from './modelo/jugador';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(
    jugadores: Jugador[],
    pagina: number = 0,
    busqueda: string = ''
  ): Jugador[] {
    if (busqueda.length === 0) return jugadores.slice(pagina, pagina + 1);
    const filtrarJugador = jugadores.filter(
      (jugador) =>
        jugador.disciplina.nombre.includes(busqueda) ||
        jugador.facultad.nombre.includes(busqueda)
    );
    return filtrarJugador.slice(pagina, pagina + 1);
  }
}
