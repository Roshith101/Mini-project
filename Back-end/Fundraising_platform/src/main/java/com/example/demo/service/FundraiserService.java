package com.example.demo.service;

import com.example.demo.model.Fundraiser;
import com.example.demo.repository.FundraiserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
//import java.util.UUID;

@Service
public class FundraiserService {
    private final FundraiserRepository fundraiserRepository;

    public FundraiserService(FundraiserRepository fundraiserRepository) {
        this.fundraiserRepository = fundraiserRepository;
    }

    public Fundraiser createFundraiser(String title, String description, double goal, MultipartFile image) throws IOException {
        Fundraiser fundraiser = new Fundraiser();
        fundraiser.setTitle(title);
        fundraiser.setDescription(description);
        fundraiser.setGoal(goal);

        // Save the image as bytes and set the image bytes in the fundraiser object
        saveImage(fundraiser, image);

        // Perform any necessary validation or business rules before creating the fundraiser
        // ...

        return fundraiserRepository.save(fundraiser);
    }

    public void saveImage(Fundraiser fundraiser, MultipartFile image) throws IOException {
        fundraiser.setImageBytes(image.getBytes());
    }

    public Fundraiser getFundraiserById(Long id) {
        // Implement the logic to retrieve the fundraiser from the database by ID
        // For example:
        return fundraiserRepository.findById(id).orElse(null);
    }
}
