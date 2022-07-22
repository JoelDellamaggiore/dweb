package com.dweb.jugadores.services;

import java.util.List;

import com.dweb.jugadores.models.Disciplina;

public interface DisciplinaService {
    public Disciplina save(Disciplina disciplina);
    public Disciplina findById(String codigo);
    public List<Disciplina> findAll();
    public void delete(String codigo);
    
}
