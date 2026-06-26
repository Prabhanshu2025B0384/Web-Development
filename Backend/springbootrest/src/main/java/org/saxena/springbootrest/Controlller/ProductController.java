package org.saxena.springbootrest.Controlller;

import org.saxena.springbootrest.modal.Product;
import org.saxena.springbootrest.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
    public class ProductController {
    @Autowired
    ProductService service;
    @RequestMapping("/product")
    public List<Product> getProduct() {
        return service.getProducts();
    }
}
