package com.example.demo.service;

import com.example.demo.model.Donation;
import com.example.demo.repository.DonationRepository;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;
import com.example.demo.model.User;
import com.example.demo.model.Fundraiser;


@Service
public class DonationService {
    private final DonationRepository donationRepository;
    
    public DonationService(DonationRepository donationRepository) {
        this.donationRepository = donationRepository;
    }
    
    public Donation donate(Donation donation) {
        // Check if the user and fundraiser exist
        User user = donation.getUser();
        Fundraiser fundraiser = donation.getFundraiser();
        if (user == null || fundraiser == null) {
            throw new IllegalArgumentException("User and Fundraiser must be provided for donation.");
        }
        
        // Perform any necessary validation or business rules before donation
        
        // Set the donated date and time
        LocalDateTime donatedAt = LocalDateTime.now();
        donation.setDonatedAt(donatedAt);
        
        // Perform any additional logic, such as updating fundraiser's total amount
        
        // Save the donation to the database
        return donationRepository.save(donation);
    }

    
    public Donation getDonationById(Long id) {
        return donationRepository.findById(id).orElse(null);
    }
    
    // Other methods for donation-related operations
    
}
