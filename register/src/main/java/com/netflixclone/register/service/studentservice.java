package com.netflixclone.register.service;

import com.netflixclone.register.model.student;

import java.util.List;

public interface studentservice {

    public student savestudent(student student);

    public List<student> getstudent();
}
