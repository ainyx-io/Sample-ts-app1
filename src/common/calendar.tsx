import '../css/common/calendar.css';
import React, { useState, useEffect } from 'react';

// Define the structure for calendar day and date
interface CalendarDay {
  id: number;
  day: string;
  date: number;
}

const Calendar: React.FC = () => {
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch calendar data from the backend
  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const response = await fetch('http://localhost:3001/calendar'); // Adjust with your correct API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch calendar data');
        }
        const data = await response.json();
        setCalendarDays(data); // Store the fetched data in state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error: any) {
        setError(error.message); // Handle any errors
        setLoading(false);
      }
    };

    fetchCalendarData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Handling loading and error states
  if (loading) return <p>Loading calendar data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="col-lg-11 calendar-wrapper" style={{ minHeight: '15vh' ,minWidth:'15vw'}}>
      <div className="col-lg-11 calendar-header">
        <h6 className="calendar-title">Schedule Calendar</h6>
        <button className="calendar-btn" type="button">
          May
        </button>
      </div>

      <div className="col-lg-9 schedule-calendar">
        <div className="row">
          {calendarDays.map((day) => (
            <div key={day.id} className="col-lg-2 schedule-card">
              <div className="schedule-item">
                <span className="schedule-day">{day.day}</span>
                <span className="schedule-date">{day.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
