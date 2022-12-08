package com.fullstackbd.tahsin.backend.controller;

import com.fullstackbd.tahsin.backend.entity.Person;
import com.fullstackbd.tahsin.backend.model.Message;
import com.fullstackbd.tahsin.backend.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping("/fetch/page/{index}/size/{size}")
    public List<Person> fetchPersonUsingPage(@PathVariable("index") Integer index, @PathVariable("size") Integer size) {
        return personService.fetchPersonUsingPage(index, size);
    }

    @GetMapping("/fetch/totalpage/size/{size}")
    public ResponseEntity<Message> getTotalPages(@PathVariable("size") int size) {
        Integer totalPages = personService.fetchTotalPage(size);
        return ResponseEntity.status(202).body(
                Message.builder()
                        .message(totalPages)
                        .result(true)
                        .statusCode(202)
                        .build()
        );
    }

    @GetMapping("/fetch/{id}")
    public ResponseEntity<?> fetchById(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.status(302).body(personService.fetchById(id));
        } catch (Exception e) {
            return ResponseEntity.status(404).body(
                    Message
                            .builder()
                            .message("Person Was Not Found")
                            .result(false)
                            .statusCode(404)
                            .build()
            );
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Message> addPerson(@RequestBody Person person) {
        try {
            personService.addPerson(person);
            return ResponseEntity.status(201).body(
                    Message.builder()
                            .message("Successfully Added Person")
                            .result(true)
                            .statusCode(201)
                            .build()
            );
        } catch (Exception e) {
            return ResponseEntity.status(406).body(
                    Message.builder()
                            .message("Couldn't Add Person")
                            .result(false)
                            .statusCode(406)
                            .build()
            );
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        try {
            personService.deleteById(id);
            return ResponseEntity.status(202).body(
                    Message
                            .builder()
                            .message("Successfully Deleted Person")
                            .result(true)
                            .statusCode(202)
                            .build()
            );
        } catch (Exception e) {
            return ResponseEntity.status(404).body(
                    Message
                            .builder()
                            .message("Person Not Found")
                            .result(false)
                            .statusCode(404)
                            .build()
            );
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateById(@PathVariable("id") Long id, @RequestBody Person person) {
        try {
            personService.updatePerson(id, person);
            return ResponseEntity.status(200).body(
                    Message
                            .builder()
                            .message("Successfully Updated Person")
                            .result(true)
                            .statusCode(200)
                            .build()
            );
        } catch (Exception e) {
            return ResponseEntity.status(404).body(
                    Message
                            .builder()
                            .message("Person Not Found")
                            .result(false)
                            .statusCode(404)
                            .build()
            );
        }
    }
}
