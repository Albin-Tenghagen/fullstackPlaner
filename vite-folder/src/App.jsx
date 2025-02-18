import { Outlet } from "react-router";
import Header from "./components/HeaderFolder/Header";
import Footer from "./components/FooterFolder/Footer";
import ActivityFormModal from "./components/ActivityFormFolder/ActivityForm";
import EditTravelModal from "./components/TravelListFolder/EditTravelModal";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import "./App.css";

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


      <Footer />
    </>
  );
}

export default App;
