import React from 'react';

function RoomList({ rooms, handleRoomSelect }) {
  return (
    <div className="room-list-container">
      <h2 className="room-list-heading">Available Rooms</h2>
      <ul className="room-list">
        {rooms.map((room) => (
          <li key={room.id} className="room-item">
            <div>
              <span className="room-name">{room.name}</span>
              <span className="room-bookings">({room.bookings.join(', ')})</span>
            </div>
            <button className="book-button" onClick={() => handleRoomSelect(room)}>
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
