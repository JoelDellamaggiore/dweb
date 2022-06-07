package com.dweb.jugadores.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "jugador")
public class Jugador {
    @Id
    @Column(name = "LEGAJO", nullable = false)
    private String legajo;
    private String nombre;
    private String apellido;
    private String dni;
    private String telefono;
    private String email;
    private Date fechaNacimiento;
    //Definicion de atributos de la clase
    @ManyToOne(fetch = FetchType.LAZY)//MUCHOS JUGADORES PUEDEN PERTENECER A UNA MISMA NACIONALIDAD
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "nacionalidad_codigo")
    private Nacionalidad nacionalidad;
    @ManyToOne(fetch = FetchType.LAZY)//MUCHOS JUGADORES PUEDEN PERTENECER A UNA MISMA FACULTAD
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "facultad_codigo")
    private Facultad facultad;
    @ManyToOne(fetch = FetchType.LAZY)//MUCHOS JUGADORES PUEDEN PERTENECER A UNA MISMA FACULTAD
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "rol_codigo")
    private Rol rol;
    @ManyToOne(fetch = FetchType.LAZY)//MUCHOS JUGADORES PUEDEN PERTENECER A UNA MISMA FACULTAD
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "disciplina_codigo")
    private Disciplina disciplina;
    //Definicion de getters y setters
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public String getDni() {
        return dni;
    }
    public void setDni(String dni) {
        this.dni = dni;
    }
    public String getLegajo() {
        return legajo;
    }
    public void setLegajo(String legajo) {
        this.legajo = legajo;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }
    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
    public Nacionalidad getNacionalidad() {
        return nacionalidad;
    }
    public void setNacionalidad(Nacionalidad nacionalidad) {
        this.nacionalidad = nacionalidad;
    }
    public Facultad getFacultad() {
        return facultad;
    }
    public void setFacultad(Facultad facultad) {
        this.facultad = facultad;
    }
    public Rol getRol() {
        return rol;
    }
    public void setRol(Rol rol) {
        this.rol = rol;
    }
    public Disciplina getDisciplina() {
        return disciplina;
    }
    public void setDisciplina(Disciplina disciplina) {
        this.disciplina = disciplina;
    }
    
}
