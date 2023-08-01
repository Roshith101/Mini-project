package HotelManagement;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DatabaseConnection {
private static final String DB_URL = "jdbc:mysql://localhost:3306/hotel_reservations";
private static final String DB_USER = "root";
private static final String DB_PASSWORD = "root";
private Connection connection;

public DatabaseConnection() throws SQLException{
	connection  = DriverManager.getConnection(DB_URL,DB_USER,DB_PASSWORD);
}
public void close() throws SQLException {
    if (connection != null) {
        connection.close();
    }
}
public void addUser(User user) throws SQLException {
    String insertQuery = "INSERT INTO users (username, password,email,phone) VALUES (?,?,?,?)";

    try (PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {
        preparedStatement.setString(1, user.getUser_name());
        preparedStatement.setString(2, user.getPassword());
        preparedStatement.setString(3, user.getEmail());
        preparedStatement.setString(4, user.getPhone());
        
        

        preparedStatement.executeUpdate();
    }
}

//login

public User getUserByEmail(String Email) throws SQLException {
    String selectQuery = "SELECT * FROM users WHERE email = ?";

    try (PreparedStatement preparedStatement = connection.prepareStatement(selectQuery)) {
        preparedStatement.setString(1, Email);

        ResultSet resultSet = preparedStatement.executeQuery();

        if (resultSet.next()) {
            String password = resultSet.getString("password");

            return new User(Email, password);
        }
    }

    return null;
}
public int addHotel(Hotel hotel) throws SQLException {
    String insertQuery = "INSERT INTO hotels (hotel_name,hotel_manager,address,phone_number,rooms) VALUES (?,?,?,?,?)";

    try (PreparedStatement preparedStatement = connection.prepareStatement(insertQuery,Statement.RETURN_GENERATED_KEYS)) {
        preparedStatement.setString(1, hotel.getHotel_name());
        preparedStatement.setString(2, hotel.getHotel_manager());
        preparedStatement.setString(3, hotel.getAddress());
        preparedStatement.setString(4, hotel.getPhone_number());
        preparedStatement.setInt(5, hotel.getRooms());
        
        

        preparedStatement.executeUpdate();
        
        ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
        if (generatedKeys.next()) {
            return generatedKeys.getInt(1); // Return the generated hotel_id
        } else {
            throw new SQLException("Failed to get the generated hotel_id.");
        }
    }
}
public List<Hotel> getAllHotels() throws SQLException {
    List<Hotel> hotels = new ArrayList<>();

    String selectQuery = "SELECT * FROM hotels";

    try (Statement statement = connection.createStatement()) {
        ResultSet resultSet = statement.executeQuery(selectQuery);

        while (resultSet.next()) {
            String hotel_name= resultSet.getString("hotel_name");
            String hotel_manager = resultSet.getString("hotel_manager");
            String address = resultSet.getString("address");
            String phone_number = resultSet.getString("phone_number");
            int rooms = resultSet.getInt("rooms");
            // Fetch other hotel properties as needed...

            Hotel hotel = new Hotel(hotel_name, hotel_manager, address,phone_number,rooms);
            hotels.add(hotel);
        }
    }

    return hotels;
}

public void addRoom(Rooms room) throws SQLException {
    String insertQuery = "INSERT INTO rooms (hotel_id,room_type,availability,priceperday) VALUES (?,?,?,?)";

    try (PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {
        preparedStatement.setInt(1, room.getHotel_id());
        preparedStatement.setString(2, room.getRoom_type());
        preparedStatement.setBoolean(3, room.isAvailability());
        preparedStatement.setFloat(4, room.getPriceperday());
        
        

        preparedStatement.executeUpdate();
    }
}



}