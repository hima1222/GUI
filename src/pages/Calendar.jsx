import React, { useState } from "react";
import Calendar from "react-calendar"; // Import the calendar library
import "react-calendar/dist/Calendar.css"; // Import the calendar styles
import "./Calendar.css"; // Import your custom styles

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Current selected date
  const diaryEntries = {
    "2025-01-01": "New Year's Entry",
    "2025-01-07": "First Week Entry",
    "2025-01-10": "Motivational Entry",
  };

  // Highlight days with entries
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
      if (diaryEntries[formattedDate]) {
        return "diary-entry-day"; // Custom class for days with entries
      }
      if (formattedDate === new Date().toISOString().split("T")[0]) {
        return "today"; // Custom class for today
      }
    }
    return null;
  };

  const handleDateClick = (value) => {
    setSelectedDate(value);
    const formattedDate = value.toISOString().split("T")[0];
    alert(
      diaryEntries[formattedDate]
        ? `Diary Entry for ${formattedDate}: ${diaryEntries[formattedDate]}`
        : `No diary entry for ${formattedDate}.`
    );
  };

  return (
    <div className="calendar-page">
      <h1>My Diary Calendar</h1>
      <p>Click on a day to view entries!</p>
      <Calendar
        onChange={handleDateClick} // When a date is clicked
        value={selectedDate} // Current selected date
        tileClassName={tileClassName} // Custom class for diary entry days
      />
    </div>
  );
}

export default CalendarPage;

