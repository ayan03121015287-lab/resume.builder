import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditCV.css";

function EditCV() {
  const { id } = useParams();

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:60/api/cv/single/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm(data);
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = async () => {
    await fetch(`http://localhost:60/api/cv/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        age: Number(form.age),
      }),
    });

    window.location.href = "/dashboard";
  };

  if (loading) {
    return <p className="loading">Loading CV...</p>;
  }

  return (
    <div className="edit-container">
      <div className="edit-card fade-up">
        <h2>Edit CV</h2>

        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" />
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" />
        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" />
        <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Address" />
        <input value={form.age} type="number" onChange={(e) => setForm({ ...form, age: e.target.value })} placeholder="Age" />
        <input value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })} placeholder="Gender" />

        <textarea value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} placeholder="Experience" />
        <textarea value={form.education} onChange={(e) => setForm({ ...form, education: e.target.value })} placeholder="Education" />
        <textarea value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} placeholder="Skills" />
        <textarea value={form.habits} onChange={(e) => setForm({ ...form, habits: e.target.value })} placeholder="Habits" />

        <button onClick={handleUpdate}>Update CV</button>
      </div>
    </div>
  );
}

export default EditCV;