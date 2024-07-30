package com.netflixclone.register.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.netflixclone.register.service.studentservice;
import com.netflixclone.register.model.student;

import java.util.List;

@RestController
@RequestMapping("/student")
public class studentcontoller {
    @Autowired
    private studentservice studentservice;

    @PostMapping("/add")
    public String addStudent(@RequestBody student student) {
        studentservice.savestudent(student);
        return "success";
    }

    @GetMapping("/getAll")
    public List<student> getAllStudent() {


        return studentservice.getstudent();
    }




}
