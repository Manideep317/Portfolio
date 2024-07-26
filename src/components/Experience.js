import Image from 'next/image'
import React from 'react'
import img1 from '@/../public/exp1.png'
import img2 from '@/../public/exp2.png'
export default function Experience() {
  return (
    <div className='w-full h-full flex max-md:flex-col py-[1rem] gap-[3rem]'>
      <div className="min-w-[320px] w-[320px] p-[1rem] shadow-lg rounded-lg bg-[#ffffff]">
        <a href="https://anjalipickles.com/" className="">
        <Image src={img1} width={1600} height={900}/>
        </a>
      </div>
      <div className="max-w-[320px] w-[320px] p-[1rem] shadow-xl rounded-lg bg-[#ffffff]">
        <a href="https://icpc-nu.vercel.app/" className="">
        <Image src={img2} width={1600} height={900}/>
        </a>
      </div>
    </div>
  )
}
