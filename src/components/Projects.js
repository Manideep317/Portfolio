import React from 'react'
import project1 from '@/../public/project1.png'
import Image from 'next/image'
export default function Projects() {
  return (
    <main className='w-full h-full'>
      <div className="w-full h-full">
        <Image src={project1} height={1600} width={900}></Image>
      </div>
    </main>
  )
}
