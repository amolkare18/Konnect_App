import React, { useState } from "react";
import "./Add_contact.css";

export default function Add_contact({ addContact }) {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(form.name.trim(), form.phone.trim());
    setForm({ name: "", phone: "" });
  };

  return (
    <div className="add-contact">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}
