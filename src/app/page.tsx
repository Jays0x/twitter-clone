'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import SignUpModal from "@/components/library/modals/SignUpModal";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex lg:flex-row justify-center lg:items-center  gap-14 flex-col lg:gap-[120px] h-[100vh] font-font1">

       <div className="flex lg:flex-row items-center justify-center flex-col lg:gap-[250px] gap-14">

          <div> 
              <Image src="/logo.png" alt="logo" width={100} height={100} className="w-12 lg:w-[380px] lg:m-auto opacity-90"/>
          </div>
           
           <div className="">

              <h1 className="lg:text-[50px] text-[32px] tracking-tight mb-8 font-font2">Happening now</h1>

              <div className="lg:w-[65%]">

                <h1 className="font-font2 text-[20px] mb-6">Join today.</h1>

                <div className="flex flex-col gap-3 mb-4">

                  <Button className="text-[14px] h-[50px] rounded-full flex gap-3">
                    <FcGoogle className="w-[20px] h-[20px]" />
                    Sign up with Google
                  </Button>

                  <Button className="text-[14px] h-[50px] rounded-full flex gap-3">
                    <FaApple className="w-[20px] h-[20px]" />
                    Sign up with Apple
                  </Button>

                </div>

               <div className="flex flex-row w-full justify-center items-center mb-5">
                  <hr className="opacity-10"/>
                   <p className="text-white opacity-30">or</p>
                  <hr className="opacity-10"/>
               </div>

                <div>
                  <Button onClick={openModal} variant='secondary' className="text-[14px] h-[50px] rounded-full w-full mb-5">Create account</Button>
                  
                  <p className="mb-8 opacity-70 text-[14px]">
                  By signing up, you agree to the <Link href='#' className="hover:text-white border-b ">Terms of Service</Link> and <Link href='#' className="hover:text-white border-b ">Privacy Policy</Link> including <Link href='#' className="hover:text-white border-b ">Cookie Use</Link>.
                  </p>
                </div>
              </div>

              <div>
                <h1 className="mb-5 text-[20px] font-font2">Already have an account?</h1>
                <Link href='#'><Button variant='default' className="text-[14px] h-[40px]">Log in</Button></Link>
              </div>
           </div> 

          
         
       </div>

       {
         isModalOpen && (
           <SignUpModal onClose={closeModal} />
         )
       }

    </div>
  );
}
