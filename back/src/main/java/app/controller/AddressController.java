package app.controller;

import app.model.Address;
import app.service.AddressService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class AddressController {

  private AddressService addressService;

  public AddressController(AddressService addressService) {
    this.addressService = addressService;
  }

  @RequestMapping(value = "/api/address", method = RequestMethod.POST)
  public Address saveAddress(@RequestBody @Valid Address address) {
    if (addressService.findByEmailOrByPhone(address.getEmail(), address.getPhone()).isPresent()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "A contact with the same email or phone is already exists.");
    }
    return addressService.save(address);
  }

  @RequestMapping(value = "/api/address/{address-id}", method = RequestMethod.DELETE)
  public ResponseEntity deleteAddress(@PathVariable(name="address-id") Long addressId) {
    addressService.delete(addressId);
    return ResponseEntity.noContent().build();
  }

  @RequestMapping(value = "/api/address", method = RequestMethod.PATCH)
  public ResponseEntity updateAddress(@RequestBody @Valid Address address) {

    Optional<Address> optionalAddress = addressService.findById(address.getId());

    if (!optionalAddress.isPresent()) {
      return ResponseEntity.badRequest().build();
    }

    return ResponseEntity.ok(addressService.save(address));
  }

  @RequestMapping("/api/address/filterAll")
  public List<Address> filterAddresses(@RequestParam(value = "query", defaultValue = "") String query) {
    if (query == null || query.trim().isEmpty()) {
      return Collections.emptyList();
    }
    return addressService.filter(query);
  }

  @RequestMapping("/api/address")
  public List<Address> getAddresses() {
    return addressService.getAll();
  }
}
