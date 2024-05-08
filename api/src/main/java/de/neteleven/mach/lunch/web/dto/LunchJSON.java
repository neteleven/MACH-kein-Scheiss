package de.neteleven.mach.lunch.web.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class LunchJSON {

    private UUID id;
    private String name;
    private float price;
    private LocalDateTime createDate;
}
