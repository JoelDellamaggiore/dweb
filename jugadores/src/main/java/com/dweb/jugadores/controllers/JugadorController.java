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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dweb.jugadores.models.Disciplina;
import com.dweb.jugadores.models.Facultad;
import com.dweb.jugadores.models.Jugador;
import com.dweb.jugadores.models.Nacionalidad;
import com.dweb.jugadores.services.DisciplinaService;
import com.dweb.jugadores.services.FacultadService;
import com.dweb.jugadores.services.JugadorService;
import com.dweb.jugadores.services.NacionalidadService;
@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/jugadores")
public class JugadorController {
    @Autowired
    private JugadorService jugadorService;
    @Autowired
    private FacultadService facultadService;
    @Autowired
    private DisciplinaService disciplinaService;
    @Autowired
    private NacionalidadService nacionalidadService;
    //Enpoints sobre valores que va a tomar el jugador de otras clases
    @GetMapping("/facultades")
    public ResponseEntity<List<Facultad>> listarFacultades(){
        return new ResponseEntity<>(facultadService.findAll(),HttpStatus.OK);
    }
    @GetMapping("/disciplinas")
    public ResponseEntity<List<Disciplina>> listarDisciplinas(){
        return new ResponseEntity<>(disciplinaService.findAll(),HttpStatus.OK);
    }
    @GetMapping("/nacionalidades")
    public ResponseEntity<List<Nacionalidad>> listarNacionalidades(){
        return new ResponseEntity<>(nacionalidadService.findAll(),HttpStatus.OK);
    }
    //Endpoints sobre el jugador
    @GetMapping("/listar")
    public ResponseEntity<List<Jugador>> listarJugadores(){
    
        return new ResponseEntity<>(jugadorService.findAll(),HttpStatus.OK);
    }
    @GetMapping("/{legajo}")
    public ResponseEntity<Jugador> obtenerJugador(@PathVariable String legajo){
        return new ResponseEntity<>(jugadorService.findById(legajo),HttpStatus.OK);
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

  
    @GetMapping("/search")
    public ResponseEntity<List<Jugador>> search(@RequestParam("filtro") String filtro){
        return ResponseEntity.ok(jugadorService.searchJugador(filtro));
    }
}