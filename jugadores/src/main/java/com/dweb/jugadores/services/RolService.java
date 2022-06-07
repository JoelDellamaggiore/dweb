package com.dweb.jugadores.services;

import java.util.List;

import com.dweb.jugadores.models.Rol;

public interface RolService {
    public Rol save(Rol rol);
    public Rol findById(String codigo);
    public List<Rol> findAll();
    public void delete(String codigo);
}