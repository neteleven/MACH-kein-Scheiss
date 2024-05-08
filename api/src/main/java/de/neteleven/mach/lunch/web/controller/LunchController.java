package de.neteleven.mach.lunch.web.controller;

import de.neteleven.mach.lunch.services.LunchService;
import de.neteleven.mach.lunch.web.dto.LunchCreateJSON;
import de.neteleven.mach.lunch.web.dto.LunchJSON;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lunch")
@RequiredArgsConstructor
public class LunchController {

    private final LunchService lunchService;

    @GetMapping
    public List<LunchJSON> getAll() {
        return lunchService.findAll();
    }

    @PostMapping
    public LunchJSON create(@Valid @RequestBody LunchCreateJSON json) {
        return lunchService.create(json);
    }
}
