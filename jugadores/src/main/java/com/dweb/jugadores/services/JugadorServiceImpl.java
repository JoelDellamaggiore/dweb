package com.dweb.jugadores.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dweb.jugadores.dao.JugadorDao;
import com.dweb.jugadores.models.Jugador;
@Service
public class JugadorServiceImpl implements JugadorService {
    @Autowired
    private JugadorDao jugadorDao;
    @Override
    public Jugador save(Jugador jugador) {
        return jugadorDao.save(jugador);
    }

    @Override
    public Jugador findById(String legajo) {
        return jugadorDao.findById(legajo).orElse(null);
    }

    @Override
    public List<Jugador> findAll() {
        return jugadorDao.findAll();
    }

    @Override
    public void delete(String legajo) {
        jugadorDao.deleteById(legajo);
    }

    @Override
    public List<Jugador> searchJugador(String filtro) {
        List<Jugador> jugador = jugadorDao.search(filtro.toUpperCase());
        return jugador;
    }

    @Override
    public List<Jugador> searchCombosJugador(String disciplinaSeleccionada, String nacionalidadSeleccionada,
            String facultadSeleccionada) {
                List<Jugador> jugador = jugadorDao.searchCombos(disciplinaSeleccionada,nacionalidadSeleccionada,facultadSeleccionada);
                return jugador;
    }

  
    
    
    

}
