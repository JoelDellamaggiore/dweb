package com.dweb.jugadores.services;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.dweb.jugadores.models.Jugador;

public interface JugadorService {
    public Jugador save(Jugador jugador);
    public Jugador findById(String legajo);
    public List<Jugador> findAll();
    public void delete(String legajo);
    List<Jugador> searchJugador(String filtro, String filtroDisc);


}
