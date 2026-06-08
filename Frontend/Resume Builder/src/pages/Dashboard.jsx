import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [cvs, setCvs] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const fetchCVs = async () => {
    const res = await fetch(`http://localhost:60/api/cv/${userId}`);
    const data = await res.json();
    setCvs(data);
  };

  const deleteCV = async (id) => {
    await fetch(`http://localhost:60/api/cv/${id}`, {
      method: "DELETE",
    });
    fetchCVs();
  };

  useEffect(() => {
    if (!userId) {
      navigate("/");
    } else {
      fetchCVs();
    }
  }, []);

  return (
    <div className="dashboard-container">
      
      {/* HEADER */}
      <div className="dashboard-header fade-up">
        <h2>Your CVs</h2>
        <Link to="/create" className="create-btn">
          + Create CV
        </Link>
      </div>

      {/* LIST */}
      <div className="cv-list">
        {cvs.length === 0 ? (
          <p className="empty fade-up">No CVs found. Create one!</p>
        ) : (
          cvs.map((cv, index) => (
            <div
              className="cv-card fade-up"
              key={cv._id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{cv.name}</h3>

              <div className="cv-actions">
                <Link to={`/view/${cv._id}`}>View</Link>
                <Link to={`/edit/${cv._id}`}>Edit</Link>
                <button onClick={() => deleteCV(cv._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default Dashboard;