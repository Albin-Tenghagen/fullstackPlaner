import React, { useState } from 'react';

const TravelForm = ({ onSubmit }) => {
  const [country, setCountry] = useState('');
  const [adventuresEnd, setAdventuresEnd] = useState('');
  const [timeOfDeparture, setTimeOfDeparture] = useState('');
  const [travellingParty, setTravellingParty] = useState('');
  const [methodOfTransportation, setMethodOfTransportation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh


    onSubmit({ country, timeOfDeparture, methodOfTransportation, adventuresEnd, travellingParty }); // Pass new travel item to parent
    setCountry(''); // Clear input fields
    setTimeOfDeparture('');
    setAdventuresEnd('');
    setTravellingParty('');
    setMethodOfTransportation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter country"
        required
      />
<label> Time of Departure: 
<input
                type="date"
        value={timeOfDeparture}
        onChange={(e) => setTimeOfDeparture(e.target.value)}
        required
      />
</label>
<label> Adventures End: 
            <input
        type="date"
        value={adventuresEnd}
        onChange={(e) => setAdventuresEnd(e.target.value)}
        placeholder="Adventures End"
        required
      />
      </label>
            <input
        type="text"
        value={travellingParty}
        onChange={(e) => setTravellingParty(e.target.value)}
        placeholder="Travelling Party"
        required
      />

<input
        type="text"
        value={methodOfTransportation}
        onChange={(e) => setMethodOfTransportation(e.target.value)}
        placeholder="Method of Transportation"
        required
      />

      <button type="submit">Add Travel</button>
    </form>
  );
};

export default TravelForm;
