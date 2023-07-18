package com.example.demo.controller;

import com.example.demo.model.Fundraiser;
import com.example.demo.service.FundraiserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fundraisers")
public class FundraiserController {
    private final FundraiserService fundraiserService;
    
    public FundraiserController(FundraiserService fundraiserService) {
        this.fundraiserService = fundraiserService;
    }
    
    @PostMapping
    public ResponseEntity<Fundraiser> createFundraiser(@RequestBody Fundraiser fundraiser) {
        Fundraiser createdFundraiser = fundraiserService.createFundraiser(fundraiser);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdFundraiser);
    }
    
    // Other fundraiser-related endpoints
    
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
