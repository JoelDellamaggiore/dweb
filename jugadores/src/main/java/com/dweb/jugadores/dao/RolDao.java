package com.dweb.jugadores.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dweb.jugadores.models.Rol;

public interface RolDao extends JpaRepository<Rol, String>{
    
}
