package com.dweb.jugadores.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.dweb.jugadores.models.Disciplina;
import com.dweb.jugadores.services.DisciplinaService;

@CrossOrigin(origins = { "*" })
@RestController
@RequestMapping("/api/disciplina")
public class disciplinaController {

    @Autowired
    private DisciplinaService disciplinaService;

    // obtiene los datos de la bd
    @GetMapping("/listar")
    // devuelve un listado de disciplinas
    public ResponseEntity<List<Disciplina>> listarDisciplinas() {
        // se pone el http status para devolver que la peticion fue exitosa
        return new ResponseEntity<>(disciplinaService.findAll(), HttpStatus.OK);
    }

    // sirve para insertar datos
    @PostMapping("/crear")
    // el requestbody convierte el json en una clase disciplina
    public ResponseEntity<Disciplina> crearDisciplina(@RequestBody Disciplina disciplina) {
        return new ResponseEntity<Disciplina>(disciplinaService.save(disciplina), HttpStatus.CREATED);
    }

    @PutMapping("/actualizar/{codigo}")

    public ResponseEntity<Disciplina> actualizarDisciplina(@PathVariable String codigo,
            @RequestBody Disciplina disciplina) {
        Disciplina disciplinaFind = disciplinaService.findById(codigo);

        if (disciplinaFind == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }
        try {
            disciplinaFind.setNombre(disciplina.getNombre());
            disciplinaFind.setDescripcion(disciplina.getDescripcion());
            return new ResponseEntity<>(disciplinaService.save(disciplinaFind), HttpStatus.CREATED);
        } catch (DataAccessException e) {
            // devuelve que hubo erro en la bd
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/eliminar/{codigo}")

    public ResponseEntity<?> eliminarDisciplina(@PathVariable String codigo) {
        disciplinaService.delete(codigo);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
