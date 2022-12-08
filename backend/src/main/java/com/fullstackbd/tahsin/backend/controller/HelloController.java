package com.fullstackbd.tahsin.backend.controller;

import com.fullstackbd.tahsin.backend.model.Message;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/")
    public Message helloWorld() {
        return Message.builder().message("Welcome to this backend api").result(true).statusCode(202).build();
    }
}
