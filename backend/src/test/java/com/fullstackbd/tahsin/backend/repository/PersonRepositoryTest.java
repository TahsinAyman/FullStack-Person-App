package com.fullstackbd.tahsin.backend.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PersonRepositoryTest {

    @Autowired
    private PersonRepository personRepository;

    @Test
    public void addPerson() {
        personRepository.addPerson(201L, "Tahsin", 12);
    }

    @Test
    public void updatePerson() {
        personRepository.updatePersonId(201L, 1L);
    }

}