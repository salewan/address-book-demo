package app.service;

import app.model.Address;
import app.repository.AddressRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class AddressServiceImpl implements AddressService {

  private AddressRepository addressRepository;

  @Autowired
  public AddressServiceImpl(AddressRepository addressRepository) {
    this.addressRepository = addressRepository;
  }

  @Override
  public Address save(Address address) {
    return addressRepository.save(address);
  }

  @Override
  public void delete(Long addressId) {
    addressRepository.deleteById(addressId);
  }

  @Override
  public List<Address> filter(String query) {
    return addressRepository.findAddresses(query);
  }

  @Override
  public List<Address> getAll() {
    Iterable<Address> all = addressRepository.findAll();
    System.out.println(all);
    return Lists.newArrayList(all);
  }

  @Override
  public Optional<Address> findById(Long id) {
    return addressRepository.findById(id);
  }

  @Override
  public Optional<Address> findByEmailOrByPhone(String email, String phone) {
    return addressRepository.findByEmailOrPhone(email, phone);
  }
}
