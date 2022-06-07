package com.dweb.jugadores.services;

import java.util.List;

import com.dweb.jugadores.models.Facultad;

public interface FacultadService {
    public Facultad save(Facultad facultad);
    public Facultad findById(String codigo);
    public List<Facultad> findAll();
    public void delete(String codigo);
}
