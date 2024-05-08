package de.neteleven.mach.lunch.services;

import de.neteleven.mach.lunch.entities.LunchEntity;
import de.neteleven.mach.lunch.mapper.LunchMapper;
import de.neteleven.mach.lunch.repositories.LunchRepository;
import de.neteleven.mach.lunch.web.dto.LunchCreateJSON;
import de.neteleven.mach.lunch.web.dto.LunchJSON;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LunchService {

    private final LunchRepository lunchRepository;
    private final LunchMapper lunchMapper;

    public List<LunchJSON> findAll() {
        return lunchRepository.findAll().stream().map(lunchMapper::toJSON).toList();
    }

    public LunchJSON create(LunchCreateJSON json) {
        var entity = LunchEntity.builder().name(json.getName()).price(json.getPrice()).build();
        return lunchMapper.toJSON(lunchRepository.save(entity));
    }
}
