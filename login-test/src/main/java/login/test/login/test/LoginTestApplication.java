package login.test.login.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class LoginTestApplication {

	@GetMapping("/")
	public String login(){
		return "authenticated successfully" ;
	}



	public static void main(String[] args) {
		SpringApplication.run(LoginTestApplication.class, args);
	}

}
