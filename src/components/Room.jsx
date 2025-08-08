import React from 'react';
import './Room.css';

const Room = ({ room, onDetailsClick }) => {
  return (
    <div className="room__card">
      <div className="room__image">
        <img src={room.img.replace('/assets/', '/src/assets/')} alt={room.name} />
      </div>
      <div className="room__content">
        <h3>{room.name}</h3>
        <p className="room__price">₦{room.price.toLocaleString()} per year</p>
        <p className="room__availability">
          {room.availableBedspaces} bedspace{room.availableBedspaces !== 1 ? 's' : ''} available
        </p>
        <button 
          className="btn btn-primary" 
          onClick={() => onDetailsClick(room)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Room;
