'use client'
import React, { useState } from 'react';
// import './App.css';
import TabNavigation from './TabNavigation';
import ContentSection from './ContentSection';
import BookingForm from './BookingForm';
import ScheduleClass from './ScheduleClass';
import Logo from './Logo';
import Link from 'next/link';


const Book: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Pre-K to Grade 3');

  const tabs = ['Pre-K to Grade 3', 'Grades 4 - 8', 'Grades 9 - 12', 'Music/Coding/Language'];

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center">
      <Link href={"/"} className='top-3 '>
        <Logo/>
      </Link>
      <main className=" py-8 w-full flex flex-col items-center">
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div  className='mx-32 max-md:mx-5'>
        <ContentSection activeTab={activeTab} />
        </div>
      </main>
    </div>
  );
};

export default Book;