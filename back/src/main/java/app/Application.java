package app;

import app.model.Address;
import app.repository.AddressRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @Bean
  public CommandLineRunner demo(AddressRepository repository) {
    return (args) -> {
      repository.save(new Address("Eleanor D Ruffin", "b1v3z61hnw9@thrubay.com", "5054774771"));
      repository.save(new Address("Vida W Gary", "f8f77bf8x3@fakemailgenerator.net", "3166861166"));
      repository.save(new Address("Roderick R Boone", "7m5y5jj88bb@payspun.com", "2708221537"));
      repository.save(new Address("Ashley C Guerrero", "7ck5gj7nz3m@payspun.com", "4063450264"));
      repository.save(new Address("Pat J Rodriguez", "up7lhcl8zj@iffymedia.com", "4407097487"));
      repository.save(new Address("Hans J Wilkens", "xo2953sossq@iffymedia.com", "6269388767"));
      repository.save(new Address("Mark C Ferrera", "af8voavc7g6@thrubay.com", "3077605969"));
      repository.save(new Address("Rafael M Weathers", "p7ntjeitc6@iffymedia.com", "5034027667"));
      repository.save(new Address("Anna M Smith", "ivd6uew40tk@claimab.com", "3098728588"));
      repository.save(new Address("Sara C Scanlan", "stssyrqir9r@fakemailgenerator.net", "7146392032"));
    };
  }
}