package com.social.app.model;

public class Address{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String city;

    private String state;

    private String street;

    private String apartment;

    private String apartmentCode;

    private String doorNumber;
}