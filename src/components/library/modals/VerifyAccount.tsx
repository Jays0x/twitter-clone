import React, { useState } from 'react'
import Image from 'next/image';

import { LiaTimesSolid } from 'react-icons/lia';



function VerifyAccount() {


  return (
    <div className=''>
        <div className="w-[80%] m-auto flex flex-col gap-5">
        <div className='mb-10'>
              <Image src="/logo.png" alt="logo" width={100} height={100} className="w-8 lg:m-auto opacity-90" />
        </div>
            <h1 className="text-[25px] font-font2">Verify Your Account</h1>
            <p>Enter the 6-digit code sent to email</p>

            {/* Verification Code Input */}
            <div className="flex justify-between">
              
                <input
                  id='code'
                  type="text"
                  maxLength={6}
                  className="w-[50px] h-[50px] text-center bg-transparent border border-white rounded-md text-white"
                  
                />
            </div>
        </div>
    </div>
  )
}

export default VerifyAccount;