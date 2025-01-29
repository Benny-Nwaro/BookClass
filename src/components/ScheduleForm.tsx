import React, { useState } from "react";

type ScheduleFreeClassProps = {
  onConfirm: (date: string, time: string) => void;
};

const ScheduleForm: React.FC<ScheduleFreeClassProps> = ({ onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = Array.from({ length: 30 }, (_, i) => i + 1); // Example dates
  const times = ["07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM"]; // Example times

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      onConfirm(selectedDate, selectedTime);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-2">Schedule Your FREE Class</h1>
        <p className="text-center text-gray-500 mb-8">Lorem ipsum dolor</p>

        <div className="grid grid-cols-2 gap-8">
          {/* Date Selector */}
          <div className="bg-blue-100 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">📅</span> Select a date
            </h2>
            <div className="grid grid-cols-7 gap-2 text-center">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date.toString())}
                  className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                    selectedDate === date.toString()
                      ? "bg-blue-500 text-white"
                      : "bg-white border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selector */}
          <div className="bg-blue-100 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <span className="mr-2">⏰</span> Select a time
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                    selectedTime === time
                      ? "bg-blue-500 text-white"
                      : "bg-white border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">TIME ZONE: (UTC +01:00 West Central Africa)</p>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          disabled={!selectedDate || !selectedTime}
          className="mt-8 w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md disabled:opacity-50"
        >
          Confirm schedule
        </button>
      </div>
    </div>
  );
};

export default ScheduleForm;
