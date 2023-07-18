package com.example.demo.controller;

import com.example.demo.model.Donation;
import com.example.demo.service.DonationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/donations")
public class DonationController {
    private final DonationService donationService;
    
    public DonationController(DonationService donationService) {
        this.donationService = donationService;
    }
    
    @PostMapping
    public ResponseEntity<Donation> donate(@RequestBody Donation donation) {
        Donation createdDonation = donationService.donate(donation);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDonation);
    }
    
    // Other donation-related endpoints
    
    // Example endpoint for getting donation details by ID
    @GetMapping("/{id}")
    public ResponseEntity<Donation> getDonation(@PathVariable Long id) {
        Donation donation = donationService.getDonationById(id);
        if (donation != null) {
            return ResponseEntity.ok(donation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
