package org.example;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {
           Alien a = new Alien();
           a.setId(5);
           a.setName("Noob");
           a.setTech("spring");

        Configuration config=new Configuration().addAnnotatedClass(Alien.class).configure("hibernate.cfg.xml");

        SessionFactory factory=config.buildSessionFactory();
        Session session=factory.openSession();
        Transaction transaction=session.beginTransaction();
//        session.persist(a);

        Alien a1=session.find(Alien.class,5);
        System.out.println(a1);

//        session.merge(a);
//        session.remove(a1);
//
//        transaction.commit();
        session.close();
        factory.close();
    }
}