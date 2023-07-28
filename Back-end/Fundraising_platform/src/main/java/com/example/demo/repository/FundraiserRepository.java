package com.example.demo.repository;

import com.example.demo.model.Fundraiser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundraiserRepository extends JpaRepository<Fundraiser, Long> {
    // Additional custom query methods can be defined here if needed
}
