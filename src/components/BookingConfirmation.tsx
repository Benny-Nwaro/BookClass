import React from "react";
import Students from "../../public/assets/student.png"

type BookingConfirmationProps = {
  subject: string;
  date: string;
  time: string;
};

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  subject,
  date,
  time,
}) => {

  return (
    <div className="w-[500px] max-md:w-full flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full  relative">   
        {/* Heading */}
        <h1 className="text-xl font-bold text-center mb-2">
          Your free class has been booked!
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Your booking has been received and you will be notified shortly
        </p>

        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src={Students.src}
            alt="Illustration"
            className="w-3/4"
          />
        </div>

        {/* Class Details */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-3">Class details</h2>
          <div className="text-sm">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Subject</span>
              <span className="text-gray-700">{subject}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Date</span>
              <span className="text-gray-700">{date}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Time</span>
              <span className="text-gray-700">{time}</span>
            </div>
          </div>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500">
          <a
            href="/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Login
          </a>{" "}
          to your account to see the details of your upcoming meeting/class
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmation;
