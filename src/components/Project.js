import React from 'react'
import Image from 'next/image'
export default function Project({info}) {
  return (
    <div className='w-[300px] p-[1rem]'>
        <Image src={info.img}/>
        <div className="">
            <a href={info.git}>Source code</a>
        </div>
    </div>
  )
}
