package com.dweb.jugadores.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dweb.jugadores.models.Jugador;
import com.dweb.jugadores.services.JugadorService;
@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/jugadores")
public class JugadorController {
    @Autowired
    private JugadorService jugadorService;
    @GetMapping("/listar")
    public ResponseEntity<List<Jugador>> listarJugadores(){
        return new ResponseEntity<>(jugadorService.findAll(),HttpStatus.OK);
    }
    @PostMapping("/nuevo-jugador")
    public ResponseEntity<Jugador> nuevoJugador(@RequestBody Jugador jugador){
        return new ResponseEntity<>(jugadorService.save(jugador),HttpStatus.CREATED);
    }
    @PutMapping("/actualizar/{legajo}")
    public ResponseEntity<Jugador> actualizarJugador(@PathVariable String legajo, @RequestBody Jugador jugador){
        Jugador jugadorEncontrado = jugadorService.findById(legajo);
        if (jugadorEncontrado == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        try {
            jugadorEncontrado.setApellido(jugador.getApellido());
            jugadorEncontrado.setNombre(jugador.getNombre());
            jugadorEncontrado.setDisciplina(jugador.getDisciplina());
            jugadorEncontrado.setEmail(jugador.getEmail());
            jugadorEncontrado.setFacultad(jugador.getFacultad());
            jugadorEncontrado.setFechaNacimiento(jugador.getFechaNacimiento());
            jugadorEncontrado.setRol(jugador.getRol());
            jugadorEncontrado.setTelefono(jugador.getTelefono());
            jugadorEncontrado.setDni(jugador.getDni());
            jugadorEncontrado.setNacionalidad(jugador.getNacionalidad());
            return new ResponseEntity<>(jugadorService.save(jugadorEncontrado),HttpStatus.CREATED);        
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/eliminar/{legajo}")
    public ResponseEntity<?> eliminarJugador(@PathVariable String legajo){
        jugadorService.delete(legajo);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    
}
