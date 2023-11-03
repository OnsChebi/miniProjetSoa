package com.tekup.soa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tekup.soa.repository.AdminRepository;
import com.tekup.soa.models.Admin;

@RestController
public class AdminController {
    
    @Autowired
    AdminRepository repo;
 @GetMapping("/admin")
	public List<Admin> getAllAdmin(){
        List<Admin> admins = repo.findAll();
		return admins;
	}
    @GetMapping("/admins/{id}")
	public Admin getAdmin(@PathVariable int id) {
		Admin admin = repo.findById(id).get();
		
		return admin;
		
	} 
    @PostMapping("/admin/add")
	public ResponseEntity<Admin> createStudent(@RequestBody Admin admin) {
		Admin newAdmin = repo.save(admin);
		return ResponseEntity.status(HttpStatus.CREATED).body(newAdmin);
		
	}  
    
    @PutMapping("/admin/update/{id}")
	public Admin updateStudents(@PathVariable int id) {
	   Admin admin = repo.findById(id).get();
	   admin.setFirstname("anis");
	   admin.setLastname("dridi");
       admin.setEmail("anis.dridi@gmail.com");
	   repo.save(admin);
	   return admin;
		
	}
    @DeleteMapping("/admin/delete/{id}")
	
	public void removeStudent(@PathVariable int id) {
		Admin admin = repo.findById(id).get();
		repo.delete(admin);
	}
}