package app.service;

import app.model.Address;

import java.util.List;
import java.util.Optional;

public interface AddressService {

  Address save(Address address);

  void delete(Long addressId);

  List<Address> filter(String query);

  List<Address> getAll();

  Optional<Address> findById(Long id);

  Optional<Address> findByEmailOrByPhone(String email, String phone);
}
