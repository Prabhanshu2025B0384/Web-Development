package org.example;

import jakarta.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Alien {

    private int id;
    private String name;
    private int age;
    private int marks;

    public Alien() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }


    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }
}