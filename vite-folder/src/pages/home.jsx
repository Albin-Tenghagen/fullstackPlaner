import React from "react";
import TravelForm from "../components/TravelFormFolder/TravelForm";
import TravelList from "../components/TravelListFolder/TravelList";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Travel App</h1>
      {/* Form for adding a new travel (uses Redux for global state) */}
      <TravelForm />

      {/* List of travels (retrieves data from Redux global state) */}
      <TravelList />
    </div>
  );
};

export default Home;
