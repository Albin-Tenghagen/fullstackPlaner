import React, { useState } from 'react';
import TravelList from '../components/TravelListFolder/TravelList.jsx';
import TravelForm from '../components/TravelFormFolder/TravelForm.jsx';

const Home = () => {
  const [travels, setTravels] = useState([]);

  const addOrUpdateTravel = (travel) => {
    setTravels([...travels, travel]); // Add new travel activity
  };

  const deleteTravel = (index) => {
    setTravels(travels.filter((_, i) => i !== index)); // Remove an item
  };

  return (
    <div>
      <h1>Welcome to the Travel App</h1>
      <TravelForm onSubmit={addOrUpdateTravel} />
      <TravelList travels={travels} setTravels={setTravels} onDelete={deleteTravel} />
    </div>
  );
};

export default Home;