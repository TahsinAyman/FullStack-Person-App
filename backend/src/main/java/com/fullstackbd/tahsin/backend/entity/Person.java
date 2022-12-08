package com.fullstackbd.tahsin.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(schema = "person")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private Integer age;
}
