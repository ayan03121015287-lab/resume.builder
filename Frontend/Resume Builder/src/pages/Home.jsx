import { Link } from "react-router-dom";
import "./Home.css";
import temp1 from "./temp1.jpg";
import temp2 from "./temp2.jpg";
import temp3 from "./temp3.jpg";
import temp4 from "./temp4.jpg";
import temp5 from "./temp5.jpg";
import temp6 from "./temp6.jpg";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <h1>
          Build Your Professional CV <br />
          <span>In Minutes 🚀</span>
        </h1>

        <p>
          Create modern, clean, and job-ready resumes with ease.
        </p>

        <Link to="/create" className="hero-btn">
          Build CV
        </Link>
      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="card">
            <img src={temp1} alt="Classic Template" />
          <h3>Classic Template</h3>
                  <Link to="/create" className="hero-btn">
          Build CV
        </Link>
        </div>

        <div className="card">
            <img src={temp2} alt="Modern Design" />
          <h3>Modern Template</h3>
                  <Link to="/create" className="hero-btn">
          Build CV
        </Link>
        </div>

        <div className="card">
            <img src={temp3} alt="Minimal Design" />
          <h3>Minimal Template</h3>
                  <Link to="/create" className="hero-btn">
          Build CV
        </Link>
        </div>
<div className="card">
            <img src={temp4} alt="Modern Design" />
          <h3>Executive Template</h3>
                  <Link to="/create" className="hero-btn">
          Build CV
        </Link>
        </div>
<div className="card">
            <img src={temp5} alt="Brown Sidebar" />
          <h3>Brown Sidebar</h3>
                  <Link to="/create" className="hero-btn">
          Build CV
        </Link>
        </div>
<div className="card">
            <img src={temp6} alt="Corporate Blue" />
          <h3>Corporate Blue</h3>
                  <Link to="/create" className="hero-btn">
          Build CV
        </Link>
        </div>

      </section>

    </div>
  );
}

export default Home;