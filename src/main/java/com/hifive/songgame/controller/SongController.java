package com.hifive.songgame.controller;

import java.util.List;

import com.hifive.songgame.model.Song;
import com.hifive.songgame.repository.SongRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class SongController {

    @Autowired
    private SongRepository songRepository;
    
    @GetMapping("songs")
    public List<Song> getSongs(){
        return this.songRepository.findAll();

    }
}