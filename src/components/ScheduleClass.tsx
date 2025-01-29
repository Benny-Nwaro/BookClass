import React, { useState } from "react";
import Calendar from "react-calendar"; // Install using `npm install react-calendar`
import "react-calendar/dist/Calendar.css"; // Import default styles for react-calendar
import "../../public/assets/css/custom-calendar.css";
import BookingConfirmation from "./BookingConfirmation";

const ScheduleClass: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false); // State to manage overlay visibility

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      setShowOverlay(true); // Show overlay when schedule is confirmed
    } else {
      alert("Please select a date and time");
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false); // Close overlay when needed
  };

  const bookingDetails = {
    subject: "Mathematics",
    date: "2025-01-25",
    time: "10:00 AM",
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen  bg-gray-100 text-gray-800 relative">
      {/* Header */}
      <h1 className="text-4xl max-md:text-xl font-bold mb-2 max-md:mb-0 text-center">
        Schedule Your FREE Class
      </h1>
      <p className="text-gray-500 mb-8 max-md:mb-1 text-center">
        Pick a date and time that works for you
      </p>

      {/* Scheduling Section */}
      <div className="items-start w-full lg:w-3/4 max-md:w-full gap-8 bg-white rounded-lg p-8 max-md:p-2 shadow-lg">
      <div className="flex flex-col max-md:flex-col">
      <div className="flex flex-row max-md:flex-col max-md:space-y-5">
          {/* Date Picker */}
        <div className="flex-1">
          <h2 className="flex items-center  text-lg font-medium mb-4 max-md:mb-2">
            <span className="mr-2">📅</span> Select a date
          </h2>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="react-calendar w-full max-w-full"
          />
          {selectedDate && (
            <p className="mt-2 text-sm text-blue-500">
              Selected Date: {selectedDate.toDateString()}
            </p>
          )}
        </div>

        {/* Time Picker */}
        <div className="flex-1 w-full">
          <h2 className="flex items-center justify-center text-lg font-medium mb-4">
            <span className="mr-2">⏰</span> Select a time
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            TIME ZONE: (UTC +01:00 West Central Africa)
          </p>
          <div className="flex flex-row space-x-2">
            {["07:00 PM", "08:00 PM", "09:00 PM"].map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`w-full py-3 max-md:py-1 max-md:p-2 max-md:text-sm rounded-lg font-medium ${
                  selectedTime === time
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
          {selectedTime && (
            <p className="mt-2 text-sm text-blue-500">
              Selected Time: {selectedTime}
            </p>
          )}
        </div>
  
        </div>
            {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className={`mt-8 py-4 max-md:py-2 px-12 w-fit max-md:-mt-0 mx-auto rounded-full font-medium text-white ${
            selectedDate && selectedTime
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!selectedDate || !selectedTime}
        >
          Confirm Schedule
        </button>
      </div>
      </div>

      {/* Overlay for Booking Confirmation */}
      {showOverlay && (
        <div className="fixed max-md:w-full inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="rounded-lg p-8 relative lg:w-3/4 max-w-lg max-md:mx-auto">
            <button
              onClick={handleCloseOverlay}
              className="absolute lg:top-48 right-4 z-40 text-xl text-black hover:text-gray-700"
            >
              ✖
            </button>
            <BookingConfirmation
                        subject={bookingDetails.subject}
                        date={bookingDetails.date}
                        time={bookingDetails.time}
                      />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleClass;
