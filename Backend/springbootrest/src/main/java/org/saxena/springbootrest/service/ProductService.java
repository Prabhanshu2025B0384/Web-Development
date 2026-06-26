package org.saxena.springbootrest.service;

import org.saxena.springbootrest.modal.Product;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;
@Component
public class ProductService {
    List<Product> products =
            List.of(new Product("sukablyat", "sup", 123));
    public List<Product> getProducts() {
        return products;
    }
}
