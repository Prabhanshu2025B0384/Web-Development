package org.example;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {

        Alien a = new Alien();
        a.setId(5);
        a.setName("Alien");
        a.setTech("spring");

        Configuration config = new Configuration();

        SessionFactory factory = config.buildSessionFactory();
        Session session = factory.openSession();

        session.persist(a);
    }
}