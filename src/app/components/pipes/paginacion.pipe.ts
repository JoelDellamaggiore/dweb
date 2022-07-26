import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from 'src/app/modelo/jugador';

@Pipe({
  name: 'paginacion'
})
export class PaginacionPipe implements PipeTransform {

  transform(jugadores: Jugador[], pagina: number = 0, cuantosPorPagina: number): Jugador[] {
    
    return jugadores.slice(pagina,pagina+cuantosPorPagina)
  }

}
