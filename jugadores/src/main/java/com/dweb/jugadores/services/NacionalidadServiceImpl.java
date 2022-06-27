package com.dweb.jugadores.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dweb.jugadores.dao.NacionalidadDao;
import com.dweb.jugadores.models.Nacionalidad;





@Service
public class NacionalidadServiceImpl implements NacionalidadService {
    @Autowired
    private NacionalidadDao nacionalidadDao;
    @Override
    public Nacionalidad save(Nacionalidad nacionalidad) {
        return nacionalidadDao.save(nacionalidad);
    }

    @Override
    public Nacionalidad findById(String codigo) {
        return nacionalidadDao.findById(codigo).orElse(null);
    }

    @Override
    public List<Nacionalidad> findAll() {
        return nacionalidadDao.findAll();
    }

    @Override
    public void delete(String codigo) {
        nacionalidadDao.deleteById(codigo);
    }
    
}
