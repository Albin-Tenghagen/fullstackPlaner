import TravelForm from "../components/TravelFormFolder/TravelForm";
import { useState } from "react";
import ActivityFormModal from "../components/ActivityFormFolder/ActivityForm";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
      setActivities([...activities, newActivity]);
  };

  return (
    <>
      <TravelForm />
      {isModalOpen && (
        <ActivityFormModal 
          closeModal={() => setIsModalOpen(false)} 
          addActivity={addActivity}
        />
      )}
    </>
  )
}

export default Home;
