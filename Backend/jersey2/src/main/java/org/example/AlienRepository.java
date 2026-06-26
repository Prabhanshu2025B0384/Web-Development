package org.example;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AlienRepository {

    Connection con = null;

    public AlienRepository() {

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/jdbclearning",
                    "root",
                    "root"
            );

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Alien> getAliens() {

        List<Alien> aliens = new ArrayList<>();

        String sql = "select * from student";

        try {

            Statement st = con.createStatement();

            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {

                Alien a = new Alien();

                a.setId(rs.getInt("id"));
                a.setName(rs.getString("name"));
                a.setAge(rs.getInt("age"));
                a.setMarks(rs.getInt("marks"));

                aliens.add(a);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return aliens;
    }

    public Alien getAlien(int id) {

        String sql = "select * from student where id=?";

        Alien a = new Alien();

        try {

            PreparedStatement st =
                    con.prepareStatement(sql);

            st.setInt(1, id);

            ResultSet rs = st.executeQuery();

            if (rs.next()) {

                a.setId(rs.getInt("id"));
                a.setName(rs.getString("name"));
                a.setAge(rs.getInt("age"));
                a.setMarks(rs.getInt("marks"));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return a;
    }
    public void updateAlien(Alien a) {

        String sql =
                "update student set name=?, age=?, marks=? where id=?";

        try {

            PreparedStatement st =
                    con.prepareStatement(sql);

            st.setString(1, a.getName());
            st.setInt(2, a.getAge());
            st.setInt(3, a.getMarks());
            st.setInt(4, a.getId());

            st.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public void deleteAlien(int id) {

        String sql = "delete from student where id=?";

        try {

            PreparedStatement st =
                    con.prepareStatement(sql);

            st.setInt(1, id);

            st.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void addAlien(Alien a) {

        String sql =
                "insert into student(name,age,marks) values(?,?,?)";

        try {

            PreparedStatement st =
                    con.prepareStatement(sql);

            st.setString(1, a.getName());
            st.setInt(2, a.getAge());
            st.setInt(3, a.getMarks());

            st.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}