import React, { useState } from 'react';

const TravelForm = ({ onSubmit }) => {
  const [destination, setDestination] = useState('');
  const [adventuresEnd, setAdventuresEnd] = useState('');
  // const [destination, setDestination] = useState('');
  // const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!destination || !adventuresEnd || !date) {
      alert('Please fill in all fields.');
      return;
    }

    onSubmit({ destination, adventuresEnd, date }); // Pass new travel item to parent
    setDestination(''); // Clear input fields
    setAdventuresEnd('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination"
        required
      />
            <input
        type="text"
        value={destination}
        onChange={(e) => setAdventuresEnd(e.target.value)}
        placeholder="Adventures End"
        required
      />
            <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination"
        required
      />
            <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Travel</button>
    </form>
  );
};

export default TravelForm;
