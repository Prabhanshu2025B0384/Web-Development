package org.eaxena.spring_boot1;

import org.springframework.stereotype.Component;

@Component
public class laptop implements computer {
    public void  greet(){

        System.out.println("Hola amigo bich");
    }
}
