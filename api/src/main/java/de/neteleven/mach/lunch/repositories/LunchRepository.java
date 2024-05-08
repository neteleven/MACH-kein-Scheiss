package de.neteleven.mach.lunch.repositories;

import de.neteleven.mach.lunch.entities.LunchEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LunchRepository extends JpaRepository<LunchEntity, UUID> {

    List<LunchEntity> findByName(String name);
}
