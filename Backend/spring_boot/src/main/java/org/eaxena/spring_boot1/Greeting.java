package org.eaxena.spring_boot1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Component
public class Greeting {
    computer f;
    //@Autowired //field injection
    Greeting(flower f) {
        this.f = f;
    }
    void greet(){
        f.greet();
        System.out.println("Hello World");
    }
}
