package com.fullstackbd.tahsin.backend.service;

import com.fullstackbd.tahsin.backend.entity.Person;

import java.util.List;

public interface PersonService {
    List<Person> fetchPersonUsingPage(Integer index, Integer size);

    Integer fetchTotalPage(int size);

    void addPerson(Person person);

    Person fetchById(Long id);

    void deleteById(Long id);

    void updatePerson(Long id, Person person);
}
