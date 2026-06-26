package org.saxena.springbootrest.Controlller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
    @RequestMapping("/")
    @ResponseBody
    public String  index(){
        return "index";
    }
    @RequestMapping("/about")
    @ResponseBody
    public String  about(){
        return "hahahah fucnk you";
    }


}
