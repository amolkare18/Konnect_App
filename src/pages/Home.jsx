import React, { useState, useEffect } from "react";
import List from "../components/List.jsx";
import Add_contact from "../components/Add_contact.jsx";
import Navbar from "../components/Navbar.jsx";
import "./Home.css";

export default function Home() {
  // Load contacts from localStorage or start empty
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : {};
  });

  // Save contacts whenever they change
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // For search functionality
  const [search, setSearch] = useState("");

  // Add new contact
  const addContact = (name, phone) => {
    if (!name || !phone) {
      alert("Please fill both fields!");
      return;
    }

    // Validate phone number: 10 digits only
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits and only numbers!");
      return;
    }

    // Prevent duplicate contact names
    if (contacts[name]) {
      alert("Contact already exists!");
      return;
    }

    // Add new contact
    setContacts((prev) => ({
      ...prev,
      [name]: { phone },
    }));
  };

  // Filter contacts by search input (case-insensitive)
const filteredContacts = Object.entries(contacts || {}).filter(([name]) =>
  name?.toLowerCase().includes(search.toLowerCase())
);


  return (
    <div className="home-container">
      {/* <Navbar /> */}

      <header className="home-header">
        <h1>
          Welcome to <span className="brand">Konnect</span>
        </h1>
        <p className="subtitle">
          Your personal contact manager — add, view, and organize effortlessly.
        </p>
      </header>

      <main className="home-content">
        <section className="list-section">
          {/* 🔍 Search bar */}
          <input
            type="text"
            placeholder="Search contact by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded mb-4 w-full"
          />

          <List contacts={Object.fromEntries(filteredContacts)} />
        </section>

        <section className="add-section">
          <Add_contact addContact={addContact} />
        </section>
      </main>
    </div>
  );
}
