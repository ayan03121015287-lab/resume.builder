import { useState } from "react";
import "./CreateCV.css";
import "./index.css";
function CreateCV() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    gender: "",
    experience: "",
    education: "",
    skills: "",
    habits: "",
  });

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:60/api/cv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        age: Number(form.age),
        userId: localStorage.getItem("userId"),
      }),
    });

    await res.json();
    window.location.href = "/dashboard";
  };

  return (
    <div className="cv-container">
      <div className="cv-card fade-up">
        <h2>Create Your CV</h2>
        <p className="subtitle">Fill your professional details</p>

        <div className="grid">
          <input placeholder="Full Name" onChange={e => setForm({...form, name: e.target.value})} />
          <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
          <input placeholder="Phone" onChange={e => setForm({...form, phone: e.target.value})} />
          <input placeholder="Address" onChange={e => setForm({...form, address: e.target.value})} />
          <input type="number" placeholder="Age" onChange={e => setForm({...form, age: e.target.value})} />
          <input placeholder="Gender" onChange={e => setForm({...form, gender: e.target.value})} />
        </div>

        <textarea placeholder="Experience" onChange={e => setForm({...form, experience: e.target.value})}></textarea>
        <textarea placeholder="Education" onChange={e => setForm({...form, education: e.target.value})}></textarea>
        <textarea placeholder="Skills" onChange={e => setForm({...form, skills: e.target.value})}></textarea>
        <textarea placeholder="Habits" onChange={e => setForm({...form, habits: e.target.value})}></textarea>

        <button onClick={handleSubmit}>Save CV</button>
      </div>
    </div>
  );
}

export default CreateCV;