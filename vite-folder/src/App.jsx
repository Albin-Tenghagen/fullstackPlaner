import { Outlet } from "react-router";
import Header from "./components/HeaderFolder/Header";
import Footer from "./components/FooterFolder/Footer";
import EditTravelModal from "./components/editTravelFolder/EditTravelModal";
import ActivityFormModal from "./components/ActivityFormFolder/ActivityForm";
import EditActivityFormModal from "./components/ActivityFormFolder/EditActivityForm";
import { useSelector } from "react-redux";
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
      {modal.isOpen && modal.modalType === "editActivity" && (
        <EditActivityFormModal />
      )}

      <Footer />
    </>
  );
}

export default App;
