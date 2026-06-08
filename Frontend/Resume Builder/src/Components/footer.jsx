import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Resume Builder</h2>
          <p>Build professional resumes in minutes.</p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#" target="_blank"><FaFacebookF /></a>
          <a href="#" target="_blank"><FaInstagram /></a>
          <a href="#" target="_blank"><FaLinkedinIn /></a>
          <a href="#" target="_blank"><FaTwitter /></a>
          <a href="#" target="_blank"><FaGithub /></a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;