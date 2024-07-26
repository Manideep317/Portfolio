import React from 'react'
import Image from 'next/image'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'

export default function Landingpage() {
  return (
    <div className='w-full flex-col min-h-screen flex justify-center items-center text-black bg-white'>
        <div className="w-full z-0 min-h-screen flex text-center justify-center items-center flex-col">
            <h1 className='text-[4rem] font-vietnam cursor-default font-semibold'>Hello! Iam <span className='text-[#fc6a03]'>Manideep</span></h1>
            <p className="text-[1.5rem] text-[#b2b2b2] cursor-default">Aspiring Software Developer</p>
        </div>
        <div className="w-full z-10 flex-col min-h-screen flex justify-center items-center text-black bg-white">
            
              <div className="w-full px-[1rem] flex items-center justify-center">
                <div className="w-1/2 max-md:w-full flex items-center flex-col justify-center">
                  <h1 className="text-[3rem] font-semibold">About me</h1>
                  <div className="">
                    <h1 className='text-black text-[1.25rem] text-center'>I'm actively honing my programming skills and eagerly seeking an opportunity to learn from experienced developers in a collaborative environment. I believe that continuous learning and working alongside talented individuals are key to accelerating my growth as a developer.</h1>
                  </div>
                </div>
              </div>
        </div>
        <div className="w-full z-10 flex-col px-[1rem] min-h-screen flex justify-center items-center text-black bg-[#fdfdfb]">
          <div className="w-full flex items-center justify-center">
            <div className="lg:w-2/3 max-md:w-full flex items-center flex-col">
              <h1 className="text-[3rem] font-semibold">Skills</h1>
              <div className="">
                <h1 className='text-black text-[1.5rem] text-center'>I have a strong foundation in programming languages such as</h1>
                <div className="">
                  <Skills/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full z-10 flex-col px-[1rem] min-h-screen flex justify-center items-center text-black bg-[#fdfdfb]">
          <div className="w-full flex items-center justify-center">
            <div className="lg:w-2/3 max-md:w-full flex items-center flex-col">
              <h1 className="text-[3rem] font-semibold">Experience</h1>
              <div className="">
                <Experience/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
