import React from "react";
import "./List.css";

export default function List({ contacts, search }) {
  // Check if contacts is empty
  if (Object.keys(contacts).length === 0) {
    return (
      <div className="contact-list bg-white p-4 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-3 text-center">Your Contacts</h2>
        <p className="text-gray-500 text-center">No contacts found.</p>
      </div>
    );
  }

  // Filter contacts if search term exists
  let filteredContacts;
  if (search) {
    filteredContacts = Object.entries(contacts).filter(([name]) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    filteredContacts = Object.entries(contacts);
  }

  return (
    <div className="contact-list bg-white p-4 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-5 text-center">Your Contacts</h2>

      {filteredContacts.length === 0 ? (
        <p className="text-gray-500 text-center">No contacts found.</p>
      ) : (
        <div className="contacts-container">
          {filteredContacts.map(([name, { phone }]) => (
            <div key={name} className="contact-box">
              <div className="contact-details">
                <div className="contact-name">{name}</div>
                <div className="contact-phone">{phone}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
