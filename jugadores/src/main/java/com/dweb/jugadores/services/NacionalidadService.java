package com.dweb.jugadores.services;

import java.util.List;

import com.dweb.jugadores.models.Nacionalidad;

public interface NacionalidadService {
    public Nacionalidad save(Nacionalidad nacionalidad);
    public Nacionalidad findById(String codigo);
    public List<Nacionalidad> findAll();
    public void delete(String codigo);
}
