import React from 'react';

function BookingHistory({ bookings, handleCancelBooking }) {
  return (
    <div className="booking-history-container">
      <h2 className="booking-history-heading">Your Bookings</h2>
      {bookings.length > 0 ? (
        <ul className="booking-list">
          {bookings.map((booking, index) => (
            <li key={index} className="booking-item">
              <span>
                Room: {booking.room.name}, Time Slot: {booking.time}
              </span>
              <button
                className="cancel-button"
                onClick={() => handleCancelBooking(booking)}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2>There is no booking.</h2>
      )}
    </div>
  );
}

export default BookingHistory;
