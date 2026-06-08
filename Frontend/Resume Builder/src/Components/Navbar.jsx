import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "./image-removebg-preview.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/create">Create CV</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/">Login</Link></li>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;