package com.backendMarch.librarymanagementsystem.Controller;

import com.backendMarch.librarymanagementsystem.DTO.AuthorRequestDto;
import com.backendMarch.librarymanagementsystem.DTO.BookRequestDto;
import com.backendMarch.librarymanagementsystem.DTO.BookResponseDto;
import com.backendMarch.librarymanagementsystem.Entity.Author;
import com.backendMarch.librarymanagementsystem.Service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



    @RestController
    @RequestMapping("/author")
    public class AuthorController {

        @Autowired
        AuthorService authorService;

        // chnage to DTO
        @PostMapping("/add")
        public String addAuthor(@RequestBody AuthorRequestDto authorRequestDto) {

            authorService.addAuthor(authorRequestDto);
            return "Author added successfully";
        }

        @GetMapping("/get_authors")
        public List<Author> getAuthors() {
            return authorService.getAuthors();
        }
    }
