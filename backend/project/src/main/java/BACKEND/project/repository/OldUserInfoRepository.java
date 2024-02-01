package BACKEND.project.repository;

import BACKEND.project.domain.OldUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OldUserInfoRepository extends JpaRepository<OldUserInfo, Long> {
    Optional<OldUserInfo> findByUserId(String userId);
}