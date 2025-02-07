import { Outlet } from "react-router";
import Header from "./components/HeaderFolder/Header";
import Footer from "./components/FooterFolder/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
