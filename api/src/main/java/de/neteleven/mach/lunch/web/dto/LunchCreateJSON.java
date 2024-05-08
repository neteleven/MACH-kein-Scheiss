package de.neteleven.mach.lunch.web.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class LunchCreateJSON {

    @NotEmpty
    private String name;
    private float price;
}
