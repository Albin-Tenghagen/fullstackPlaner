import { Outlet } from "react-router";
import Header from "./components/HeaderFolder/Header";
import Footer from "./components/FooterFolder/Footer";
import ActivityFormModal from "./components/ActivityFormFolder/ActivityForm";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ActivityFormModal />
      <Footer />
    </>
  );
}

export default App;
