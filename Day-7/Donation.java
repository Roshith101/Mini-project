package com.example.demo.model;


import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "fundraiser_id")
    private Fundraiser fundraiser;
    
    private BigDecimal amount;
    private LocalDateTime donatedAt;
    
    public Donation() {
        // Default constructor
    }
    
    public Donation(int id,User user, Fundraiser fundraiser, BigDecimal amount) {
    	this.id=id;
        this.user = user;
        this.fundraiser = fundraiser;
        this.amount = amount;
        this.donatedAt = LocalDateTime.now();
    }
    
    // Getters and setters
    
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    public User getUser() {
        return user;
    }
    
    public void setUser(User user) {
        this.user = user;
    }
    
    public Fundraiser getFundraiser() {
        return fundraiser;
    }
    
    public void setFundraiser(Fundraiser fundraiser) {
        this.fundraiser = fundraiser;
    }
    
    public BigDecimal getAmount() {
        return amount;
    }
    
    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }
    
    public LocalDateTime getDonatedAt() {
        return donatedAt;
    }
    
    public void setDonatedAt(LocalDateTime donatedAt) {
        this.donatedAt = donatedAt;
    }
    
    // Other methods (if any)
}
