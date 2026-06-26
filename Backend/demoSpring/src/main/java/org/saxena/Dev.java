package org.saxena;

public class Dev {
    private String name;
    Laptop laptop;

    public void setLaptop(Laptop laptop) {
        this.laptop = laptop;
    }
    public Dev(int age) {
        this.age = age;
    }

    private int age;

    Dev() {
        System.out.println("HOla");

    }

    public String getTech() {
        return tech;
    }

    public void setTech(String tech) {
        this.tech = tech;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void build(){
        System.out.println("Suka blyat");
        laptop.compile();

    }

    private String tech;


}
