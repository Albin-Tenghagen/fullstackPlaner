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

      <section className="footerSection">
        <h4 className="footerh4 contacth4">Contact</h4>
        <article className="GithubArticle">
          <h5>Other work:</h5>
          <a
            href="https://github.com/Albin-Tenghagen"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            <img
              className="footerIcon"
              src="/icons/links-light/Github.png"
              alt="Git icon"
            />
            Albin
          </a>
          <a
            href="https://github.com/ThaisonL"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            <img
              className="footerIcon"
              src="/icons/links-light/Github.png"
              alt="Git icon"
            />
            Phi-Thai
          </a>
          <a
            href="https://github.com/Samii02"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            <img
              className="footerIcon"
              src="/icons/links-light/Github.png"
              alt="Git icon"
            />
            Sami
          </a>
          <a
            href="https://github.com/ZanaPK0"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            <img
              className="footerIcon"
              src="/icons/links-light/Github.png"
              alt="Git icon"
            />{" "}
            Zana
          </a>
          <a
            href="https://github.com/Derainted"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            <img
              className="footerIcon"
              src="/icons/links-light/Github.png"
              alt="Git icon"
            />
            Idris
          </a>
        </article>

        <article className="LinkedinArticle">
          <h5>Linkedin</h5>
          <a
            href="https://www.linkedin.com/in/albin-tenghagen-980685211/"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            <img
              className="footerIcon"
              src="/icons/links-light/Linkedin.png"
              alt="Git icon"
            />
            Albin
          </a>
          <a
            href="https://github.com/ThaisonL"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            <img
              className="footerIcon"
              src="/icons/links-light/Linkedin.png"
              alt="Git icon"
            />
            Phi-Thai
          </a>
          <a
            href="https://github.com/Samii02"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            Sami
            <img
              className="footerIcon"
              src="/icons/links-light/Linkedin.png"
              alt="Git icon"
            />
          </a>
          <a
            href="https://github.com/ZanaPK0"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            <img
              className="footerIcon"
              src="/icons/links-light/Linkedin.png"
              alt="Git icon"
            />{" "}
            Zana
          </a>
          <a
            href="https://github.com/Derainted"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            <img
              className="footerIcon"
              src="/icons/links-light/Linkedin.png"
              alt="Git icon"
            />
            Idris
          </a>
        </article>
      </section>

      <article className="footerArticle">
        <h4 className="footerh4">Trademark</h4>
        <p>Trady</p>
        <p>Lady</p>
        <p>Owns our soul</p>
        <p>© {currentYear}</p>
      </article>
    </footer>
  );
};

export default Footer;
