package com.dweb.jugadores.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dweb.jugadores.dao.FacultadDao;
import com.dweb.jugadores.models.Facultad;


@Service
public class FacultadServiceImpl implements FacultadService {
    @Autowired
    private FacultadDao facultadDao;
    @Override
    public Facultad save(Facultad facultad) {
        return facultadDao.save(facultad);
    }

    @Override
    public Facultad findById(String codigo) {
        return facultadDao.findById(codigo).orElse(null);
    }

    @Override
    public List<Facultad> findAll() {
        return facultadDao.findAll();
    }

    @Override
    public void delete(String codigo) {
        facultadDao.deleteById(codigo);
    }
    
}
