'use client';

import Image from 'next/image';
import { LiaTimesSolid } from 'react-icons/lia';
import { Input } from '@/components/ui/input';
import { IoChevronDownOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import VerifyAccount from './VerifyAccount';


const datePicker = {
  month: [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December',
  ],
  day: Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0')),
  year: Array.from({ length: 30 }, (_, i) => String(2010 - i)),
};

function SignUpModal({ onClose }) {
  const [showDay, setShowDay] = useState(false);
  const [showMonth, setShowMonth] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const [isVerified, setIsVerified] = useState(false); // Manage modal steps
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const handleOutsideClick = (event: { target: { closest: (arg0: string) => any; }; }) => {
      if (!event.target.closest('.dropdown-container')) {
        setShowDay(false);
        setShowMonth(false);
        setShowYear(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleDropdownClick = (dropdown: string) => {
    if (dropdown === 'day') {
      setShowDay(!showDay);
      setShowMonth(false);
      setShowYear(false);
    } else if (dropdown === 'month') {
      setShowMonth(!showMonth);
      setShowDay(false);
      setShowYear(false);
    } else if (dropdown === 'year') {
      setShowYear(!showYear);
      setShowDay(false);
      setShowMonth(false);
    }
  };

  const handleContinue = () => {
    // You can add form validation here if needed
    if (formData.name && formData.email && selectedDay && selectedMonth && selectedYear) {
      setIsVerified(true); // Move to the next step (verify account)
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className='h-[100vh] bg-[#141414c4] absolute w-full flex flex-row justify-center items-center px-8'>
      <div className='bg-black lg:w-[580px] h-[620px] rounded-xl w-full relative'>
        
        {/* Close button */}
        <div className='flex items-center justify-start p-4'>
          <div onClick={onClose} className='bg-[#181818] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer'>
            <LiaTimesSolid />
          </div>
        </div>

        {!isVerified ? (
          // Step 1: Create Account Form
          <>
            <div className='mb-10'>
              <Image src="/logo.png" alt="logo" width={100} height={100} className="w-8 lg:m-auto opacity-90" />
            </div>
  
            <div className="w-[80%] m-auto flex flex-col gap-5">
              <h1 className="text-[25px] font-font2 ">Create an account</h1>
              
              {/* Name input */}
              <form className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <Input className="h-[50px] border-opacity-10 border border-white" type="text" id="name" placeholder="Your name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </form>
              
              {/* Email input */}
              <form className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <Input className="h-[50px] border-opacity-10 border border-white" type="email" id="email" placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </form>

              {/* Date of Birth inputs (Day, Month, Year) */}
              <form className="flex flex-col gap-2 mb-3">
                <label htmlFor="dob">Date of birth</label>
                <div className="flex flex-row gap-4 relative">
                  {/* Day dropdown */}
                  <div onClick={() => handleDropdownClick('day')} className="h-[50px] cursor-pointer border-opacity-10 border border-white rounded-md flex flex-row items-center justify-between px-4 relative dropdown-container">
                    <input className="w-full bg-transparent outline-none placeholder:text-white placeholder:opacity-40 text-[14px]" type="text" placeholder="Day" value={selectedDay} readOnly />
                    <IoChevronDownOutline className="opacity-70" />
                    {showDay && (
                      <div className="absolute top-[-280px] left-0 w-[145px] max-h-[280px] overflow-y-auto py-4 bg-black rounded-md border border-white border-opacity-10 flex flex-col z-10">
                        {datePicker.day.map((day) => (
                          <p key={day} onClick={() => { setSelectedDay(day); setShowDay(false); }} className="cursor-pointer px-3 py-1 hover:bg-gray-700">{day}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Month dropdown */}
                  <div onClick={() => handleDropdownClick('month')} className="h-[50px] cursor-pointer border-opacity-10 border border-white rounded-md flex flex-row items-center justify-between px-4 relative dropdown-container">
                    <input className="w-full bg-transparent outline-none placeholder:text-white placeholder:opacity-40 text-[14px]" type="text" placeholder="Month" value={selectedMonth} readOnly />
                    <IoChevronDownOutline className="opacity-70" />
                    {showMonth && (
                      <div className="absolute top-[-280px] left-0 w-[145px] max-h-[280px] overflow-y-auto py-4 bg-black rounded-md border border-white border-opacity-10 flex flex-col z-10">
                        {datePicker.month.map((month) => (
                          <p key={month} onClick={() => { setSelectedMonth(month); setShowMonth(false); }} className="cursor-pointer px-3 py-1 hover:bg-gray-700">{month}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Year dropdown */}
                  <div onClick={() => handleDropdownClick('year')} className="h-[50px] cursor-pointer border-opacity-10 border border-white rounded-md flex flex-row items-center justify-between px-4 relative dropdown-container">
                    <input className="w-full bg-transparent outline-none placeholder:text-white placeholder:opacity-40 text-[14px]" type="text" placeholder="Year" value={selectedYear} readOnly />
                    <IoChevronDownOutline className="opacity-70" />
                    {showYear && (
                      <div className="absolute top-[-280px] left-0 w-[145px] max-h-[280px] overflow-y-auto py-4 bg-black rounded-md border border-white border-opacity-10 flex flex-col z-10">
                        {datePicker.year.map((year) => (
                          <p key={year} onClick={() => { setSelectedYear(year); setShowYear(false); }} className="cursor-pointer px-3 py-1 hover:bg-gray-700">{year}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </form>

              {/* Continue button */}
              <Button variant='secondary' className="lg:h-[50px] h-[40px] rounded-full text-[14px] font-font2" onClick={handleContinue}>Continue</Button>
            </div>
          </>
        ) : (
          // Step 2: Verify Account (6-digit code)
          <VerifyAccount />
        )}
      </div>
    </div>
  );
}

export default SignUpModal;
