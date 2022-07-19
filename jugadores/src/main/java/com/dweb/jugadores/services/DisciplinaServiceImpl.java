package com.dweb.jugadores.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dweb.jugadores.dao.DisciplinaDao;
import com.dweb.jugadores.models.Disciplina;




@Service
public class DisciplinaServiceImpl implements DisciplinaService {
    @Autowired
    private DisciplinaDao disciplinaDao;
    @Override
    public Disciplina save(Disciplina disciplina) {
        return disciplinaDao.save(disciplina);
    }

    @Override
    public Disciplina findById(String codigo) {
        return disciplinaDao.findById(codigo).orElse(null);
    }

    @Override
    public List<Disciplina> findAll() {
        return disciplinaDao.findAll();
    }

    @Override
    public void delete(String codigo) {
        disciplinaDao.deleteById(codigo);
    }
   
  
    
}
