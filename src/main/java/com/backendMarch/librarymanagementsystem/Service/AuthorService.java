package com.backendMarch.librarymanagementsystem.Service;

import com.backendMarch.librarymanagementsystem.DTO.AuthorRequestDto;
import com.backendMarch.librarymanagementsystem.Entity.Author;
import com.backendMarch.librarymanagementsystem.Repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AuthorService {

    @Autowired
    AuthorRepository authorRepository;

    public void addAuthor(AuthorRequestDto authorRequestDto){


        Author author =new Author();
        author.setName(authorRequestDto.getName());
        author.setAge(authorRequestDto.getAge());
        author.setEmail(authorRequestDto.getEmail());
        author.setMobNo(author.getMobNo());

        authorRepository.save(author);
    }

    public List<Author> getAuthors(){
        return authorRepository.findAll();
    }
}