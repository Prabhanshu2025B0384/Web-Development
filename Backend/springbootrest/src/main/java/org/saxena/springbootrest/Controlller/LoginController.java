package org.saxena.springbootrest.Controlller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
        @RequestMapping("/login")
        public String hola(){
            return "hola";
        }

}

