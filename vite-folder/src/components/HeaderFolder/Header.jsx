import Navbar from "../NavbarFolder/navbar";
import "./header.css";

function Header() {
  return (
    <header>
      <figure className="Header-icon">
        <img
          className="Header-img"
          src="../../../public/cloud-icon-gray-removebg-preview.png"
          alt="Logo"
        />
      </figure>
      <h1>Fullstack Planer</h1>

      <Navbar />
    </header>
  );
}

export default Header;
