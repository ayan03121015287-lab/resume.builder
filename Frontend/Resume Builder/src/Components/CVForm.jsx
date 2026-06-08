function CVForm({ form, setForm }) {
  return (
    <div>
      <h2>CV Form</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <input
        placeholder="Age"
        type="number"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: parseInt(e.target.value) })}
      />
      <input
        placeholder="Gender"
        value={form.gender}
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
      />
      <input
        placeholder="Experience"
        value={form.experience}
        onChange={(e) => setForm({ ...form, experience: e.target.value })}
      />
      <input
        placeholder="Education"
        value={form.education}
        onChange={(e) => setForm({ ...form, education: e.target.value })}
      />

      <textarea
        placeholder="Skills"
        value={form.skills}
        onChange={(e) => setForm({ ...form, skills: e.target.value })}
      />

      <textarea
        placeholder="Habits"
        value={form.habits}
        onChange={(e) => setForm({ ...form, habits: e.target.value })}
      />
    </div>
  );
}

export default CVForm;