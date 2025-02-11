import TravelForm from "../components/TravelFormFolder/TravelForm";
import { useState } from "react";
import { useEffect } from "react";
import ActivityFormModal from "../components/ActivityFormFolder/ActivityForm";
import TravelList from "../components/TravelListFolder/TravelList";
import "../components/ActivityFormFolder/activityForm.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState([]);
  const [travelArray, setTravelArray] = useState([]);
  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
    //*The modal is now closing when submiting an activity by setting the state to false
    setIsModalOpen(false);
  };

  const handleSubmitTravel = (formData) => {
    setTravelArray([...travelArray, formData]);

    setIsModalOpen(true);
    console.log("Form Submitted:", formData);
  };

  useEffect(() => {
    console.log("Travel Array Updated:", travelArray);

    console.log("activities Updated:", activities);
  }, [travelArray, activities]);

  return (
    <>
      <TravelForm
        activities={activities}
        handleSubmitTravel={handleSubmitTravel}
      />
      {isModalOpen && (
        <ActivityFormModal
          closeModal={() => setIsModalOpen(false)}
          addActivity={addActivity}
        />
      )}
      <TravelList travelArray={travelArray} />
    </>
  );
}

export default Home;
