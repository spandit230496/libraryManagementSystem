package com.backendMarch.librarymanagementsystem.Controller;

import com.backendMarch.librarymanagementsystem.DTO.StudentRequestDto;
import com.backendMarch.librarymanagementsystem.DTO.StudentResponseDto;
import com.backendMarch.librarymanagementsystem.DTO.StudentUpdateEmailRequestDto;
import com.backendMarch.librarymanagementsystem.Entity.Student;
import com.backendMarch.librarymanagementsystem.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    StudentService studentService;

    @PostMapping("/add")
    public String addStudent(@RequestBody StudentRequestDto studentRequestDto){
        studentService.addStudent(studentRequestDto);
        return "Student has been added";
    }

    @GetMapping("/find_by_email")
    public String findStudentByEmail(@RequestParam("email") String email){

        return studentService.findByEmail(email);
    }
    @GetMapping("/find_by_age")
    public List<Student> findStudentByAge(@RequestParam("age") int age){

        return studentService.findByAge(age);
    }
    // get students of particular age
    @GetMapping("/find_by_name")
      public List<Student> findStudentByName(@RequestParam("name") String name){
        return studentService.findByName(name);
}
    // try for some other attribute also

    @PutMapping("/update_email")
    public StudentResponseDto updateEmail(@RequestBody StudentUpdateEmailRequestDto studentUpdateEmailRequestDto){
        return studentService.updateEmail(studentUpdateEmailRequestDto);
    }
}
