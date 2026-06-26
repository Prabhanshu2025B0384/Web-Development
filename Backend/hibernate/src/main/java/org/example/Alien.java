package org.example;

import jakarta.persistence.*;


@Entity(name="nubde")
@Table(name = "hola")
public class Alien
{
    @Override
    public String toString() {
        return "Alien{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", tech='" + tech + '\'' +
                '}';
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

    public String getTech() {
        return tech;
    }

    public void setTech(String tech) {
        this.tech = tech;
    }
    @Id
    @Column(name="pri")
    private int id;
    private String name;
    private String tech;
}
