import { Outlet } from "react-router";
import Header from "./components/HeaderFolder/Header";
import Footer from "./components/FooterFolder/Footer";
import ActivityFormModal from "./components/ActivityFormFolder/ActivityForm";
import EditActivityFormModal from "./components/ActivityFormFolder/EditActivityForm";
import EditTravelModal from "./components/TravelListFolder/EditTravelModal";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import "./App.css";
import ActivityDetail from "./components/DetailsFolder/ActivityDetail";

function App() {
  // Access the modal state from Redux
  const modal = useSelector((state) => state.travel.modal);

  return (
    <>
      <Header />
      <Outlet />

      {/* Render the appropriate modal based on modalType */}
      {modal.isOpen && modal.modalType === "editTravel" && <EditTravelModal />}
      {modal.isOpen && modal.modalType === "activity" && <ActivityFormModal />}
      {modal.isOpen && modal.modalType === "editActivity" && <EditActivityFormModal />}

      <Footer />
    </>
  );
}

export default App;
