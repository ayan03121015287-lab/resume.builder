import { useState } from "react";
import "./Signup.css";
import "./index.css";
function Signup() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:60/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const user = await res.json();

    if (!res.ok) {
      alert("Signup failed");
      return;
    }

    localStorage.setItem("userId", user._id);
    alert("Signup successful");
    window.location.href = "/";
  };

  return (
    <div className="signup-container">
      <div className="signup-card fade-up">
        <h2>Create Account</h2>
        <p className="subtitle">Start building your CV</p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button onClick={handleSubmit}>Sign Up</button>

        <p className="login-text">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;