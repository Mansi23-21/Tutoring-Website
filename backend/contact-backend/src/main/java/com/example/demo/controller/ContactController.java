package com.example.demo.controller;

import com.example.demo.model.Contact;
import com.example.demo.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // allow React access
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/api/contact")
    public Contact saveContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    // ✅ Optional GET endpoint to remove 405 error
    @GetMapping("/api/contact")
    public String testGet() {
        return "✅ Contact API is running.";
    }
}