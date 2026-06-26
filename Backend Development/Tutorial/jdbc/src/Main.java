import java.sql.*;

public class Main {
    public static void main(String[] args) throws Exception {

        // Load and register driver
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Establish connection
        String url = "jdbc:mysql://localhost:3306/jdbclearning";
        String user = "root";
        String password = "root";

        Connection connect =
                DriverManager.getConnection(
                        url,
                        user,
                        password
                );

        // Create statement
        Statement statement =
                connect.createStatement();

        // Insert query
        String insertQuery =
                "INSERT INTO student(name, age, marks) " +
                        "VALUES('Rahul', 19, 95)";

        int row =
                statement.executeUpdate(insertQuery);

        System.out.println(
                row + " row inserted successfully!"
        );

        // Retrieval query
        String selectQuery =
                "SELECT * FROM student";

        ResultSet rs =
                statement.executeQuery(selectQuery);

        // Retrieve data
        while(rs.next()) {

            int id = rs.getInt("id");
            String name = rs.getString("name");
            int age = rs.getInt("age");
            int marks = rs.getInt("marks");

            System.out.println(
                    id + " " +
                            name + " " +
                            age + " " +
                            marks
            );
        }

        // Close resources
        rs.close();
        statement.close();
        connect.close();
    }
}