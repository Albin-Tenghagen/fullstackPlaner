import { Link } from "react-router";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <article className="footerArticle">
        <h4>Shortcuts</h4>
        <Link to="/details" className="footerLink">
          {" "}
          Travel Details
        </Link>
        <Link to="/weather" className="footerLink">
          Weather
        </Link>
        <Link to="/" className="footerLink">
          Home
        </Link>
      </article>

      <article className="footerArticle">
        <h4>Contact</h4>
        <h5>Email:</h5>
        <p>mail@mailson.com</p>
        <h5>Social media:</h5>
        <a
          href="https://github.com/Albin-Tenghagen"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Albins Github
        </a>
        <a
          href="https://github.com/ThaisonL"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Phi-Thai Github
        </a>
        <a
          href="https://github.com/Samii02"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Samis Github
        </a>
        <a
          href="https://github.com/ZanaPK0"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Zanas Github
        </a>
      </article>

      <article className="footerArticle">
        <h4>Trademark</h4>
        <p>Trady</p>
        <p>Lady</p>
        <p>Owns our soul</p>
        <p>© {currentYear}</p>
      </article>
    </footer>
  );
};

export default Footer;
