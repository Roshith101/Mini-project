package com.example.demo.repository;

import com.example.demo.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long> {
    // Additional custom query methods can be defined here if needed
}
