package com.backendMarch.librarymanagementsystem.Repository;

import com.backendMarch.librarymanagementsystem.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student,Integer> {

    // findBy{attribute name}
    Student findByEmail(String email);

    List<Student> findByName(String name);// custom search based on attribute
    List<Student> findByAge(int age);
}
