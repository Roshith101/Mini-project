package HotelManagement;

public class Hotel {
private int hotel_id;
private String hotel_name;
private String hotel_manager;
private String address;
private String phone_number;
private int rooms;
public Hotel( String hotel_name, String hotel_manager, String address, String phone_number, int rooms) {
	super();
	this.hotel_name = hotel_name;
	this.hotel_manager = hotel_manager;
	this.address = address;
	this.phone_number = phone_number;
	this.rooms = rooms;
}
public Hotel() {
	
}

public int getHotel_id() {
	return hotel_id;
}
public void setHotel_id(int hotel_id) {
	this.hotel_id = hotel_id;
}
public String getHotel_name() {
	return hotel_name;
}
public void setHotel_name(String hotel_name) {
	this.hotel_name = hotel_name;
}
public String getHotel_manager() {
	return hotel_manager;
}
public void setHotel_manager(String hotel_manager) {
	this.hotel_manager = hotel_manager;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getPhone_number() {
	return phone_number;
}
public void setPhone_number(String phone_number) {
	this.phone_number = phone_number;
}
public int getRooms() {
	return rooms;
}
public void setRooms(int rooms) {
	this.rooms = rooms;
}


}