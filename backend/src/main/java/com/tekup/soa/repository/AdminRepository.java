package com.tekup.soa.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tekup.soa.models.Admin;


@Repository

public interface AdminRepository extends JpaRepository<Admin,Integer> {
    
}
