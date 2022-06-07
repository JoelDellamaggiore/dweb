package com.dweb.jugadores.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dweb.jugadores.models.Jugador;

public interface JugadorDao extends JpaRepository<Jugador, String>{
    
}
