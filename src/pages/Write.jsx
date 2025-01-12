import React, { useState } from "react";
import "./Write.css"; // Add custom styles here

export default function Write() {
  const [showNewEntryForm, setShowNewEntryForm] = useState(false);
  const [entries, setEntries] = useState([
    { title: "First Entry", content: "This is my first entry." },
    { title: "Another Entry", content: "This is another diary entry." },
  ]);

  const handleNewEntrySubmit = (e) => {
    e.preventDefault();
    // Logic for saving the new entry
  };

  return (
    <div className="write-page">
      <h1>Write Page</h1>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button onClick={() => setShowNewEntryForm(true)}>Write New Entry</button>
        <button>Update Entry</button>
        <button>Read Old Entries</button>
      </div>

      {/* Container for Old Entries */}
      <div className="entries-container">
        <h2>Old Entries</h2>
        {entries.map((entry, index) => (
          <div key={index} className="entry-card">
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>

      {/* Form for New Entry */}
      {showNewEntryForm && (
        <div className="new-entry-form">
          <h2>Write New Entry</h2>
          <form onSubmit={handleNewEntrySubmit}>
            {/* Title Field */}
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="Entry Title" required />
            </div>

            {/* Rich Text Editor */}
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                rows="5"
                placeholder="Write your entry here..."
                required
              ></textarea>

              {/* Text Editing Tools */}
              <div className="text-tools">
                <button type="button"><b>B</b></button>
                <button type="button"><i>I</i></button>
                <select>
                  <option value="16px">16px</option>
                  <option value="18px">18px</option>
                  <option value="20px">20px</option>
                </select>
              </div>
            </div>

            {/* Upload Image */}
            <div className="form-group">
              <label htmlFor="imageUpload">Upload Image</label>
              <input type="file" id="imageUpload" accept="image/*" />
            </div>

            <button type="submit">Save Entry</button>
          </form>
        </div>
      )}
    </div>
  );
}
