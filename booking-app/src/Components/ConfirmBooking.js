import React from 'react';


function ConfirmBooking({ selectedRoom, selectedTime, handleBooking }) {
  return (
    <div className="confirm-booking-container confirm-booking-container scroll-target">
      <h2 className="confirm-booking-heading">Confirm Booking</h2>
      <p className="confirm-booking-info">Room: {selectedRoom.name}</p>
      <p className="confirm-booking-info">Time Slot: {selectedTime}</p>
      <button className="confirm-button" onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default ConfirmBooking;
