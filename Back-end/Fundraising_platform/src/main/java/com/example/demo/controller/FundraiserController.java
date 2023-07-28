package com.example.demo.controller;

import com.example.demo.model.Fundraiser;
import com.example.demo.service.FundraiserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin("*")
@RequestMapping("/fundraisers")
public class FundraiserController {
    private final FundraiserService fundraiserService;

    public FundraiserController(FundraiserService fundraiserService) {
        this.fundraiserService = fundraiserService;
    }

    @PostMapping("/createFundraiser")
    public ResponseEntity<Fundraiser> createFundraiser(@RequestParam("image") MultipartFile image,
                                                       @RequestParam("title") String title,
                                                       @RequestParam("description") String description,
                                                       @RequestParam("goal") double goal) {

        try {
            Fundraiser fundraiser = new Fundraiser(); // Create a new Fundraiser object
            fundraiser.setTitle(title);
            fundraiser.setDescription(description);
            fundraiser.setGoal(goal);

            fundraiserService.saveImage(fundraiser, image); // Save the image and set the image bytes in the fundraiser object

            Fundraiser createdFundraiser = fundraiserService.createFundraiser(title, description, goal, image);
 // Pass the individual properties to the service method
            return ResponseEntity.status(HttpStatus.CREATED).body(createdFundraiser);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Other endpoints

    // Example endpoint for getting fundraiser details by ID
    @GetMapping("/{id}")
    public ResponseEntity<Fundraiser> getFundraiser(@PathVariable Long id) {
        Fundraiser fundraiser = fundraiserService.getFundraiserById(id);
        if (fundraiser != null) {
            return ResponseEntity.ok(fundraiser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
