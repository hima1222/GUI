import React, { useState } from "react";
import Calendar from "react-calendar"; 
import "react-calendar/dist/Calendar.css"; 
import "./Calendar.css"; 
import banner1 from '../assets/banner_1.jpg';

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const diaryEntries = {
    "2025-01-01": "New Year's Entry",
    "2025-01-07": "First Week Entry",
    "2025-01-10": "Motivational Entry",
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
      if (diaryEntries[formattedDate]) {
        return "diary-entry-day"; 
      }
      if (formattedDate === new Date().toISOString().split("T")[0]) {
        return "today"; 
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
      <section>
        <img src={banner1} alt="Banner" className="banner1" />
      </section>
      
      <h2>My Diary Calendar</h2>
      <p>Click on a day to view entries!</p>
      <Calendar
        onChange={handleDateClick} 
        value={selectedDate} 
        tileClassName={tileClassName} 
      />
    </div>
  );
}

export default CalendarPage;
