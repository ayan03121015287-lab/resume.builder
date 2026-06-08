import "./Signup.css"; // reuse same styling
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:60/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const user = await res.json();

      if (!res.ok || !user._id) {
        alert("Invalid email or password");
        return;
      }

      localStorage.setItem("userId", user._id);

      alert("Login successful");
      navigate("/Home");

    } catch (err) {
      console.log("LOGIN ERROR:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card fade-up">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue</p>

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

        <button onClick={handleLogin}>Login</button>

        <p className="login-text">
          Don’t have an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
}

export default Login;