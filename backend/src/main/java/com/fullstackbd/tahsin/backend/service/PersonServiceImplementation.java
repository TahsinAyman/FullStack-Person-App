package com.fullstackbd.tahsin.backend.service;

import com.fullstackbd.tahsin.backend.entity.Person;
import com.fullstackbd.tahsin.backend.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class PersonServiceImplementation implements PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public List<Person> fetchPersonUsingPage(Integer index, Integer size) {
        Pageable pageable = PageRequest.of(index - 1, size);
        return personRepository.findAll(pageable).getContent();
    }

    @Override
    public Integer fetchTotalPage(int size) {
        Pageable pageable = PageRequest.of(0, size);
        return personRepository.findAll(pageable).getTotalPages();
    }

    @Override
    public void addPerson(Person person) {
        personRepository.addPerson(person.getId(), person.getName(), person.getAge());
    }

    @Override
    public Person fetchById(Long id) {
        return personRepository.findById(id).get();
    }

    @Override
    public void deleteById(Long id) {
        personRepository.deleteById(id);
    }

    @Override
    public void updatePerson(Long id, Person person) {
        Person oldPerson = personRepository.findById(id).get();
        if (Objects.nonNull(person.getName())) {
            personRepository.updatePersonName(oldPerson.getId(), person.getName());
        }
        if (Objects.nonNull(person.getAge())) {
            personRepository.updatePersonAge(oldPerson.getId(), person.getAge());
        }
        if (Objects.nonNull(person.getId())) {
            personRepository.updatePersonId(oldPerson.getId(), person.getId());
        }
    }
}
