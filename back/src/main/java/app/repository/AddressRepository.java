package app.repository;

import app.model.Address;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface AddressRepository extends CrudRepository<Address, Long> {

  @Query("select a from Address a where " +
      "lower(a.name) like lower(concat('%', ?1,'%')) or " +
      "lower(a.email) like lower(concat('%', ?1,'%')) or " +
      "lower(a.phone) like lower(concat('%', ?1,'%')) order by a.id")
  List<Address> findAddresses(String query);

  Optional<Address> findById(Long id);

  Optional<Address> findByEmailOrPhone(String email, String phone);
}
