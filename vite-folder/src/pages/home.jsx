import TravelForm from "../components/TravelFormFolder/TravelForm";
import { useState } from "react";
import ActivityFormModal from "../components/ActivityFormFolder/ActivityForm";
import TravelList from "../components/TravelListFolder/TravelList";

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
      <TravelList />
    </>
  );
}

export default Home;
