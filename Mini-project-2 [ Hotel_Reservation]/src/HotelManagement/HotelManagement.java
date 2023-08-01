package HotelManagement;
import java.sql.*;
import java.util.List;
import java.util.Scanner;

public class HotelManagement {
	public static void main(String args[]) {
		try {
			DatabaseConnection databaseConnection  = new DatabaseConnection();
			Scanner sc  = new Scanner(System.in);
			System.out.println("1. SignUp");
			System.out.println("2. Login");
			System.out.println("Choose an option: ");
			int option = sc.nextInt();
			
			switch(option) {
			case 1:
			   System.out.println("Enter username: ");
			   String signupUsername = sc.next();
			   System.out.println("Enter Password: ");
			   String signupPassword = sc.next();
			   System.out.println("Enter Email: ");
			   String signupEmail = sc.next();
			   System.out.println("Enter Phone: ");
			   String signupPhone = sc.next();
			
			   User newUser = new User(signupUsername,signupPassword,signupEmail,signupPhone);
			   databaseConnection.addUser(newUser);
			   System.out.println("SignUp Successful");
			   break;
			
			case 2:
				System.out.println("Enter Email: ");
				String loginEmail = sc.next();
				System.out.println("Enter Password: ");
				String loginPassword = sc.next();
				
				User user = databaseConnection.getUserByEmail(loginEmail);
				if(user!= null && user.getPassword().equals(loginPassword)) {
					System.out.println("Login successful");
					System.out.println("----------------------------------------------");
					System.out.println("1. Book a Room");
					System.out.println("2. Create a new Hotel");
					System.out.println("Chooose an option: ");
					int option1 = sc.nextInt();
					switch(option1) {
					case 1:
					    System.out.println("List of Hotels Available");
					    System.out.println();
					    System.out.println("Hotel Name "+" Hotel Manager "+" Address "+" Phone Number "+" Number of Rooms");
					    System.out.println("----------------------------------------------------------------------------------");
					    System.out.println();
					    List<Hotel> hotels = databaseConnection.getAllHotels();

			            // Print the list of hotels
			            for (Hotel hotel : hotels) {
			                System.out.println(hotel.getHotel_name()+"  "+hotel.getHotel_manager()+"  "+hotel.getAddress()+"  "+hotel.getPhone_number()+"  "+hotel.getRooms());
			                System.out.println("---------------------------------------------------------------------------------");
			            }
						break;
					case 2:
						
						System.out.print("Enter hotel name:");
						String hotel_name = sc.next();
						System.out.print("Enter hotel manager name:");
						String hotel_manager = sc.next();
						System.out.print("Enter hotel address:");
						String hotel_address = sc.next();
						System.out.print("Enter hotel phone number:");
						String phone_number = sc.next();
						System.out.print("enter no of rooms in hotel:");
					    int hotel_rooms = sc.nextInt();
					    Hotel newHotel = new Hotel(hotel_name,hotel_manager,hotel_address,phone_number,hotel_rooms);
						   int hotelId=databaseConnection.addHotel(newHotel);
						   System.out.println("Hotel added Successfully");
						   System.out.println("--------------------------------------");
						   
						   int i=1;
						   while(i<=hotel_rooms) {
							   int a =hotelId;
							   System.out.print("Enter Room Type:");
							   String room_type = sc.next();
							   boolean b = true;
							   System.out.print("Enter priceperday:");
							   float priceperday = sc.nextFloat();
							   Rooms newRoom = new Rooms(a,room_type,b,priceperday);
							   databaseConnection.addRoom(newRoom); 
							   i++;
					   }
								
						   break;
						   
					    default:
					    	System.out.print("Invalid option");
						
					}
				}
				else {
					System.out.println("Invalid Credentials. Login failed.");
				}
				break;
				
			default:
				System.out.println("Invalid option");
			}
			databaseConnection.close(); 
		}
		catch(SQLException e) {
			e.printStackTrace();
		}
	}

}