import React from "react";
import TravelForm from "../components/TravelFormFolder/TravelForm";
import TravelList from "../components/TravelListFolder/TravelList";

const Home = () => {
  return (
    <main className="home-container">
      {/* Form for adding a new travel (uses Redux for global state) */}
      <TravelForm />

      {/* List of travels (retrieves data from Redux global state) */}
      <TravelList />
    </main>
  );
};

export default Home;
