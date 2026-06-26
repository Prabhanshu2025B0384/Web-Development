package org.example;

import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.TreeMap;

class Student {

    private int id;
    private String name;
    private int age;
    private String course;

    public Student(int id, String name, int age, String course) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.course = course;
    }

    public int getId() {
        return id;
    }

    public void displayStudent() {
        System.out.println("----------------------------");
        System.out.println("ID     : " + id);
        System.out.println("Name   : " + name);
        System.out.println("Age    : " + age);
        System.out.println("Course : " + course);
    }
}

class StudentManagementSystem {

    private TreeMap<Integer, Student> students = new TreeMap<>();

    public void addStudent(Student student) {

        if (students.containsKey(student.getId())) {
            System.out.println("Student already exists");
            return;
        }

        students.put(student.getId(), student);
        System.out.println("Student Added Successfully!");
    }

    public void searchStudent(int id) {

        if (students.containsKey(id)) {
            System.out.println("Student Found!");
            students.get(id).displayStudent();
        } else {
            System.out.println("Student Not Found!");
        }
    }

    public void deleteStudent(int id) {

        if (students.containsKey(id)) {
            students.remove(id);
            System.out.println("Student Deleted Successfully!");
        } else {
            System.out.println("Student Not Found!");
        }
    }

    public void displayAllStudents() {

        if (students.isEmpty()) {
            System.out.println("No Students Available!");
            return;
        }

        System.out.println("\n===== ALL STUDENTS =====");

        for (Student student : students.values()) {
            student.displayStudent();
        }
    }
}

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        StudentManagementSystem sms = new StudentManagementSystem();

        while (true) {

            try {

                System.out.println("\n===== STUDENT MANAGEMENT SYSTEM =====");
                System.out.println("1. Add Student");
                System.out.println("2. Search Student");
                System.out.println("3. Delete Student");
                System.out.println("4. Display All Students");
                System.out.println("5. Exit");

                System.out.print("Enter Choice: ");
                int choice = sc.nextInt();

                switch (choice) {

                    case 1:

                        int id;

                        while (true) {
                            try {
                                System.out.print("Enter Student ID: ");
                                id = sc.nextInt();
                                sc.nextLine();
                                break;

                            } catch (InputMismatchException e) {
                                System.out.println("ID must be a number!");
                                sc.nextLine();
                            }
                        }

                        String name;

                        while (true) {

                            System.out.print("Enter Name: ");
                            name = sc.nextLine();

                            if (name.matches("[a-zA-Z ]+")) {
                                break;
                            } else {
                                System.out.println("Name should contain only alphabets!");
                            }
                        }

                        int age;

                        while (true) {
                            try {
                                System.out.print("Enter Age: ");
                                age = sc.nextInt();
                                sc.nextLine();
                                break;

                            } catch (InputMismatchException e) {
                                System.out.println("Age must be a number!");
                                sc.nextLine();
                            }
                        }

                        System.out.print("Enter Course: ");
                        String course = sc.nextLine();

                        Student student = new Student(id, name, age, course);

                        sms.addStudent(student);
                        break;

                    case 2:

                        try {
                            System.out.print("Enter Student ID to Search: ");
                            int searchId = sc.nextInt();

                            sms.searchStudent(searchId);

                        } catch (InputMismatchException e) {
                            System.out.println("ID must be a number!");
                            sc.nextLine();
                        }

                        break;

                    case 3:

                        try {
                            System.out.print("Enter Student ID to Delete: ");
                            int deleteId = sc.nextInt();

                            sms.deleteStudent(deleteId);

                        } catch (InputMismatchException e) {
                            System.out.println("ID must be a number!");
                            sc.nextLine();
                        }

                        break;

                    case 4:

                        sms.displayAllStudents();
                        break;

                    case 5:

                        System.out.println("Exiting Program...");
                        sc.close();
                        return;

                    default:

                        System.out.println("Invalid Choice!");
                }

            } catch (InputMismatchException e) {

                System.out.println("Please enter a valid number!");
                sc.nextLine();
            }

        }
    }
}