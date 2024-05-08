package de.neteleven.mach.lunch.mapper;

import de.neteleven.mach.lunch.entities.LunchEntity;
import de.neteleven.mach.lunch.web.dto.LunchJSON;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface LunchMapper {

    LunchJSON toJSON(LunchEntity lunchEntity);
}
