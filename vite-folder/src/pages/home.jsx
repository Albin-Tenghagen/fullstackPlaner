import TravelForm from "../components/TravelFormFolder/TravelForm";
import { useState } from "react";
import { useEffect } from "react";
import ActivityFormModal from "../components/ActivityFormFolder/ActivityForm";
import TravelList from "../components/TravelListFolder/TravelList";
import "../components/ActivityFormFolder/activityForm.css"

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState([]);
  const [travelArray, setTravelArray] = useState ([])
  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  const handleSubmitTravel = (formData) => {
   
    setTravelArray([...travelArray, formData]);
   
    setIsModalOpen(true);
    console.log("Form Submitted:", formData);

  };
  useEffect(() => {
    console.log("Travel Array Updated:", travelArray);
  }, [travelArray]); 

  return (
    <>
      <TravelForm 
      handleSubmitTravel={handleSubmitTravel} />
      {isModalOpen && (
        <ActivityFormModal
          closeModal={() => setIsModalOpen(false)}
          addActivity={addActivity}
        />
      )}
      <TravelList />
    </>
  );
}

export default Home;
