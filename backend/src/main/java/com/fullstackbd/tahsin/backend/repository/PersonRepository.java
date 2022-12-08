package com.fullstackbd.tahsin.backend.repository;

import com.fullstackbd.tahsin.backend.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

    @Query(
            value = "insert into person (id, name, age) values (:id, :name, :age)",
            nativeQuery = true
    )
    @Transactional
    @Modifying
    void addPerson(Long id, String name, Integer age);


    @Query(
            value = "update person set id = :newId where id = :id",
            nativeQuery = true
    )
    @Transactional
    @Modifying
    void updatePersonId(Long id, Long newId);

    @Query(
            value = "update person set name = :name where id = :id",
            nativeQuery = true
    )
    @Transactional
    @Modifying
    void updatePersonName(Long id, String name);

    @Query(
            value = "update person set age = :age where id = :id",
            nativeQuery = true
    )
    @Transactional
    @Modifying
    void updatePersonAge(Long id, Integer age);
}
