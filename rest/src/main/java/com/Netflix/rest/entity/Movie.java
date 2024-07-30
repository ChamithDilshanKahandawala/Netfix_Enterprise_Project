package com.Netflix.rest.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY);
    private int id;

    private
}
