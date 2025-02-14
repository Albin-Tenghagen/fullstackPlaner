import { useState } from "react";
import { useEffect } from "react";
import TravelForm from "../components/TravelFormFolder/TravelForm";
import ActivityFormModal from "../components/ActivityFormFolder/ActivityForm";
import TravelList from "../components/TravelListFolder/TravelList";
import "../components/ActivityFormFolder/activityForm.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [travelArray, setTravelArray] = useState([]);
  const [selectedTravelId, setSelectedTravelId] = useState(null);
  //! Error either here
  const addActivity = (newActivity) => {
    setTravelArray((prevTravelArray) =>
      prevTravelArray.map((travel) =>
        travel.travelId === selectedTravelId
          ? { ...travel, activities: [...travel.activities, newActivity] } // Add activity to the right travel
          : travel
      )
    );
    // Close the modal after activity is added
    setIsModalOpen(false);
    console.log("Travel Array when activity is added:", travelArray);
  };
  //! Error or could be here
  const handleSubmitTravel = (formData) => {
    const newTravelEntry = {
      ...formData,
      travelId: Date.now(), // Handle travelId generation here
      activities: [], // Ensure activities is an empty array initially
    };
    setTravelArray([...travelArray, newTravelEntry]);
    // setIsModalOpen(true); // Open the modal for adding activities
    setSelectedTravelId(newTravelEntry.travelId); // Set the selected travelId for activity submission
  };

  useEffect(() => {
    if (selectedTravelId) {
      setIsModalOpen(true); // Open the modal when selectedTravelId is set
    }
  }, [selectedTravelId]); // This hook runs whenever selectedTravelId changes

  useEffect(() => {
    console.log("Travel Array Updated:", travelArray);
  }, [travelArray]);

  return (
    <>
      <TravelForm handleSubmitTravel={handleSubmitTravel} />
      {isModalOpen && (
        <ActivityFormModal
          closeModal={() => setIsModalOpen(false)}
          addActivity={addActivity}
          selectedTravelId={selectedTravelId}
        />
      )}
      <TravelList travelArray={travelArray} addActivity={addActivity} />
    </>
  );
}

export default Home;
