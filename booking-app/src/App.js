import React, { useState, useEffect } from 'react';
import RoomList from './Components/RoomList';
import BookingHistory from './Components/BookingHistory';
import ConfirmBooking from './Components/ConfirmBooking';
import SelectTime from './Components/SelectTime';

function App() {
  const initialRooms = [
    { id: 1, name: 'Room A', bookings: [] },
    { id: 2, name: 'Room B', bookings: [] },
    { id: 3, name: 'Room C', bookings: [] },
    { id: 4, name: 'Room D', bookings: [] },
    { id: 5, name: 'Room E', bookings: [] },
  ];

  const [rooms, setRooms] = useState(initialRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    scrollTo('.select-time-container');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    scrollTo('.confirm-booking-container');
  };

  const scrollTo = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBooking = () => {
    if (!selectedRoom || !selectedTime) {
      alert('Please select a room and a time slot.');
      return;
    }

    const room = rooms.find((r) => r.id === selectedRoom.id);
    if (room.bookings.includes(selectedTime)) {
      alert('This time slot is already booked for this room.');
      return;
    }

    room.bookings.push(selectedTime);

    setRooms([...rooms]);
    const newBooking = { room: selectedRoom, time: selectedTime };
    const updatedBookings = [...bookings, newBooking];

    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    setBookings(updatedBookings);

    setSelectedRoom(null);
    setSelectedTime('');
  };

  const handleCancelBooking = (booking) => {
    const room = rooms.find((r) => r.id === booking.room.id);
    const index = room.bookings.indexOf(booking.time);
    if (index !== -1) {
      room.bookings.splice(index, 1);
    }

    setRooms([...rooms]);
    const updatedBookings = bookings.filter((b) => b !== booking);

    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    setBookings(updatedBookings);
  };

  return (
    <div className="App">
      <h1>Meeting Room Booking System</h1>

      <BookingHistory bookings={bookings} handleCancelBooking={handleCancelBooking} />

      <RoomList rooms={rooms} handleRoomSelect={handleRoomSelect} />

      {selectedRoom && (
        <SelectTime handleTimeSelect={handleTimeSelect} />
      )}

      {selectedTime && (
        <ConfirmBooking
          selectedRoom={selectedRoom}
          selectedTime={selectedTime}
          handleBooking={handleBooking}
        />
      )}

      <div className="select-time-container scroll-target"></div>
      <div className="confirm-booking-container scroll-target"></div>
    </div>
  );
}

export default App;