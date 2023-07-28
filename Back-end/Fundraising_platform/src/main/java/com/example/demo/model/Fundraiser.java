package com.example.demo.model;


import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity	
public class Fundraiser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @ManyToOne	
    @JoinColumn(name = "user_id")
    private User user;
    
    private String title;
    private String description;
//    private String imageUrl;
    private double goal; // Added goal property

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    @Lob
    private byte[] imageBytes;

    // Constructors
    public Fundraiser() {
        // Default constructor
    }
    private static final int MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB
    
    public Fundraiser(User user, String title, String description, double goal, byte[] imageBytes) {
//        this.id = id;
        this.user = user;
        this.title = title;
        this.description = description;
        this.goal = goal;
        this.imageBytes = imageBytes;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }


    public byte[] getImageBytes() {
		return imageBytes;
	}

    public void setImageBytes(byte[] imageBytes) {
        if (imageBytes != null && imageBytes.length <= MAX_IMAGE_SIZE) {
            this.imageBytes = imageBytes;
        } else {
            // Handle the case where the image byte size exceeds the limit
            throw new IllegalArgumentException("Image byte size exceeds the allowed limit.");
        }

    }


	// Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public double getGoal() {
        return goal;
    }

    public void setGoal(double goal) {
        this.goal = goal;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

//    public String getImageUrl() {
//        return imageUrl;
//    }

//    public void setImageUrl(String imageUrl) {
//        this.imageUrl = imageUrl;
//    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
