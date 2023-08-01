package HotelManagement;

public class Rooms {
	private int room_id;
	private int hotel_id;
	private String room_type;
	private boolean availability;
	private float priceperday;
	
	public Rooms(int hotel_id, String room_type, boolean availability, float priceperday) {
		super();
		this.hotel_id = hotel_id;
		this.room_type = room_type;
		this.availability = availability;
		this.priceperday = priceperday;
	}
	public int getRoom_id() {
		return room_id;
	}
	public void setRoom_id(int room_id) {
		this.room_id = room_id;
	}
	public int getHotel_id() {
		return hotel_id;
	}
	public void setHotel_id(int hotel_id) {
		this.hotel_id = hotel_id;
	}
	public String getRoom_type() {
		return room_type;
	}
	public void setRoom_type(String room_type) {
		this.room_type = room_type;
	}
	public boolean isAvailability() {
		return availability;
	}
	public void setAvailability(boolean availability) {
		this.availability = availability;
	}
	public float getPriceperday() {
		return priceperday;
	}
	public void setPriceperday(float priceperday) {
		this.priceperday = priceperday;
	}
	
	
}