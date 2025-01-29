'use client';

import React, { useState } from 'react';
import BookingForm from './BookingForm';
import AssistanceForm from './AssistanceForm';
import SchoolLevelForm from './SchoolLevelForm';
import { truncate } from 'fs';
import GoalForm from './GoalForm';
import LocationForm from './LocationForm';
import Student from "../../public/assets/studentImage.png"
import BookingConfirmation from './BookingConfirmation';
import ScheduleClass from './ScheduleClass';

interface ContentSectionProps {
  activeTab: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ activeTab }) => {
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isAssistanceFormHidden, setIsAssistanceFormHidden] = useState(false);
  const [isSchooolLevelFormHidden, setSchooolLevelFormHidden] = useState(true);
  const [isGoalFormHidden, setGoalFormHidden] = useState(true);
  const [isLocationFormHidden, setLocationFormHidden] = useState(true);
  const [isBookingFormHidden, setBookingFormHidden] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(
    undefined
  );

  const handleBookClassClick = () => {
    setIsBookingFormVisible(true);
  };
  const showAssistanceForm  = () =>{
    setIsAssistanceFormHidden(true)
    setSchooolLevelFormHidden(false)
  }

  const showSchoolLevelForm  = () =>{
    setSchooolLevelFormHidden(true)
    setGoalFormHidden(false)
  }
  const showGoalForm  = () =>{
    setGoalFormHidden(true)
    setLocationFormHidden(false)
  }
  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  const handleContinue = () => {
    setLocationFormHidden(true)
    setBookingFormHidden(false)
  };
  const handleSubmit = () => {
    setBookingFormHidden(true)
    setIsFormVisible(true)
  };

  const handleCloseForm = () => {
    setIsBookingFormVisible(false);
  };

  const bookingDetails = {
    subject: "Mathematics",
    date: "2025-01-25",
    time: "10:00 AM",
  };


  return (
    <div className="mt-8 w-full mx-auto rounded-2xl lg:p-6 lg:space-x-5  justify-between px-8 items-center text-center relative">
      <div className='flex flex-col'>
        <div className='flex flex-row lg:space-x-8 max-md:flex-col'>
        <img
          src={Student.src}
          alt="Placeholder"
          className="lg:w-[800px] lg:h-[300px] max-md:w-full object-cover rounded-2xl mb-4"
        />
        <div className="w-full max-md:w-full h-full">
          <h2 className="text-7xl font-bold text-gray-800 max-md:text-3xl mb-2">{activeTab}</h2>
          <p className="text-gray-600 mb-4 lg:text-2xl max-md:text-xl">
            We believe that quality education should be accessible to all, which is why we offer our services at affordable
            prices, making it easier for students like you to access high-quality tutoring without breaking the bank.
          </p>
          </div>
        </div>
      <button
          onClick={handleBookClassClick}
          className="lg:w-1/4 mx-auto bg-gradient-to-r border-4 border-white from-red-500 to-blue-500 text-white px-6 py-4 rounded-full text-lg font-medium shadow-md hover:opacity-90"
        >
          Book a free class
        </button>
      </div>

      {isBookingFormVisible && (
        <div className='w-full' >
          {/* Overlay content */}
          <div className="fixed inset-0 w-full  justify-center flex lg:space-y-20 max-md:space-y-4 items-center z-20">
            <div className="relative p-6 rounded-xl max-md:bg-white  mx-auto">
              {/* Close button */}
              <button
                onClick={handleCloseForm}
                className="absolute top-4 text-gray-700 font-extrabold text-2xl max-md:text-base bg-white p-2 rounded-full z-50 shadow-md hover:bg-gray-200 focus:outline-none"
              >
                X
              </button>
              <div  hidden={isAssistanceFormHidden}>
                  <AssistanceForm handleClick={showAssistanceForm}/>
                </div>
                <div hidden={isSchooolLevelFormHidden}>
                  <SchoolLevelForm handleClick={showSchoolLevelForm}/>
                </div>
                <div hidden={isGoalFormHidden}>
                  <GoalForm  handleClick={showGoalForm}/>
                </div>
                <div hidden={isLocationFormHidden}>
                  <LocationForm  
                  onContinue={handleContinue}
                  onSelect={handleLocationSelect}
                  selectedLocation={selectedLocation}/>
                </div>
                <div hidden={isBookingFormHidden}>
                  <BookingForm handleClick={handleSubmit}/>
                </div>
              </div>
          </div>
        </div>
      )}
      
      {isFormVisible && (
          <div className="fixed inset-0 w-full  justify-center z-20">
            <div className="relative  max-md:p-2 w-full max-md:bg-white  mx-auto">
              <ScheduleClass/>           
              </div>
          </div>
      )}
    </div>
  );
};

export default ContentSection;
