import { Link } from "react-router";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <article className="footerArticle">
        <h4 className="footerh4">Shortcuts</h4>
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
      {/* ------------------------------------------------------------------ */}
      <article className="footerArticle git">
        <h4 className="footerh4">
          <img
            className="footerIcon"
            src="/icons/links-light/Github.png"
            alt="Git icon"
          />
          Github
        </h4>
        <a
          href="https://github.com/Albin-Tenghagen"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Albin
        </a>
        <a
          href="https://github.com/ThaisonL"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Phi-Thai
        </a>
        <a
          href="https://github.com/Samii02"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Sami
        </a>
        <a
          href="https://github.com/ZanaPK0"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          {" "}
          Zana
        </a>
        <a
          href="https://github.com/Derainted"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Idris
        </a>
      </article>
      {/* ------------------------------------------------------------------ */}
      <article className="footerArticle linked">
        <h4 className="footerh4">
          {" "}
          <img
            className="footerIcon"
            src="/icons/links-light/Linkedin.png"
            alt="linkedin icon"
          />
          Linkedin
        </h4>
        <a
          href="https://www.linkedin.com/in/albin-tenghagen-980685211/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Albin
        </a>
        <a
          href="https://github.com/ThaisonL"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Phi-Thai
        </a>
        <a
          href="https://www.linkedin.com/in/sami-al-halabi-1aab76329/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Sami
        </a>
        <a
          href="https://github.com/ZanaPK0"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          {" "}
          Zana
        </a>
        <a
          href="https://github.com/Derainted"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Idris
        </a>
      </article>
      {/* ------------------------------------------------------------------ */}
      <article className="footerArticle trady">
        <h4 className="footerh4">Trademark</h4>
        <p>Trady Lady</p>
        <p>Owns our soul</p>
        <p>© {currentYear}</p>
      </article>
    </footer>
  );
};

export default Footer;
