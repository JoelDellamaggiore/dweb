package com.dweb.jugadores.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dweb.jugadores.models.Facultad;

public interface FacultadDao extends JpaRepository<Facultad, String>{
    
}
