package com.dweb.jugadores.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dweb.jugadores.models.Jugador;

public interface JugadorDao extends JpaRepository<Jugador, String>{

  @Query("SELECT j FROM jugador j WHERE " +
  "Upper(j.nombre) LIKE CONCAT('%',:filtro, '%')"  )
   List<Jugador> search(String filtro,String filtroDisc );

}
