import React from 'react';

function SelectTime({ handleTimeSelect}) {
  return (
    <div className="select-time-container select-time-container scroll-target">
      <h2 className="select-time-heading">Select Time Slot</h2>
      <ul className="time-slot-list">
        {Array.from({ length: 8 }, (_, i) => i + 9).map((hour) => (
          <li key={hour} className="time-slot-item">
            {hour}:00 - {hour + 1}:00{' '}
            <button className="book-button" onClick={() => handleTimeSelect(`${hour}:00-${hour + 1}:00`)}>
              Book
            </button>
          </li>
        ))}
      </ul>
      <button className="close-button">
        Close
      </button>
    </div>
    
  );
}

export default SelectTime;
