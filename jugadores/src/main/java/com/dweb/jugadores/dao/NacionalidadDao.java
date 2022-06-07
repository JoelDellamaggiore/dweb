package com.dweb.jugadores.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dweb.jugadores.models.Nacionalidad;

public interface NacionalidadDao extends JpaRepository<Nacionalidad, String> {
    
}
