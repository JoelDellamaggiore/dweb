package com.dweb.jugadores.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dweb.jugadores.models.Disciplina;

public interface DisciplinaDao extends JpaRepository<Disciplina, String> {
    
}
