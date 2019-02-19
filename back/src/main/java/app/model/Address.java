package app.model;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Entity
public class Address {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long id;

  @Column
  @NotBlank
  @Size(min = 1, max = 200, message = "name size between 1 and 200 characters only acceptable")
  private String name;

  @Column(unique = true)
  @NotBlank(message = "email can't be blank")
  @Email(message = "invalid email format")
  private String email;

  @Column(unique = true)
  @Pattern(regexp = "^$|^[0-9]{10,12}$", message = "phone is containing only digits, at least 10 but not more than 12")
  private String phone;

  protected Address() {}

  public Address(String name, String email, String phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  @Override
  public String toString() {
    return "Address{" +
        "id=" + id +
        ", name='" + name + '\'' +
        ", email='" + email + '\'' +
        ", phone='" + phone + '\'' +
        '}';
  }
}
