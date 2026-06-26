package org.eaxena.spring_boot1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(Application.class, args);
        Greeting greeting= context.getBean(Greeting.class);
        greeting.greet();

    }
}