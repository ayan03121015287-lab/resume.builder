function CVPreview({ form }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h2>CV Preview</h2>

      <h3>{form.name}</h3>
      <p>{form.email}</p>
      <p>{form.phone}</p>
      <p>{form.address}</p>
      <p>Age: {form.age}</p>
      <p>Gender: {form.gender}</p>

    <h4>Experience</h4>
    <p>{form.experience}</p>

    <h4>Education</h4>
    <p>{form.education}</p>

      <h4>Skills</h4>
      <p>{form.skills}</p>

      <h4>Habits</h4>
      <p>{form.habits}</p>
    </div>
  );
}

export default CVPreview;