package com.netflixclone.register.service;

import com.netflixclone.register.model.student;
import com.netflixclone.register.repository.studentrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class studentserviceimpl implements studentservice{


    @Autowired
    private studentrepository studentrepo;

    @Override
    public student savestudent(student student) {
        return studentrepo.save(student);
    }

    @Override
    public List<student> getstudent() {
        return studentrepo.findAll();
    }
}
