import { useState } from "react";

export default function Assignment4() {
  // Define the empty state once so it can be reused
  const initialState = {
    name: "",
    email: "",
    phone: "",
    course: "",
    semester: "",
  };

  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    setForm(initialState);
  };

  return (
    <div>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <br />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <br />
        <input
          name="course"
          value={form.course}
          onChange={handleChange}
          placeholder="Course"
        />
        <br />
        <input
          name="semester"
          value={form.semester}
          onChange={handleChange}
          placeholder="Semester"
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Submitted Information</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Phone: {submitted.phone}</p>
          <p>Course: {submitted.course}</p>
          <p>Semester: {submitted.semester}</p>
        </div>
      )}
    </div>
  );
}