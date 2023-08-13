import React from 'react'
import Image from 'next/image'

import { SectionTitle } from './'
import { profileImg } from '@/public/assets'

const About = () => {
  return (
    <section id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
      <SectionTitle title="About Me" titleNo="01" />
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
          <p>Hi! I'm Lucas and I enjoy creating things that live on the web. My interest in programming started way back in high school when I discovered I could leverage programming to make my school-work easier. From there, I combined my love of programming and video games to make mods (modifications) for various video games I enjoyed playing. I also spent countless hours looking at the source code of different web pages and trying to recreate them myself. In my free time I enjoy surfing,watching old movies and playing videogames.</p>
          <p>In the ever-evolving landscape of web development, I'm constantly on the lookout for new and emerging technologies. The fast-paced nature of our field excites me, and I thrive on the challenge of staying updated with the latest trends and tools. Whether it's experimenting with cutting-edge frameworks or exploring novel approaches to user experience, I'm dedicated to pushing the boundaries of what's possible.</p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
            <li className='flex items-center gap-2'><span className='text-textGreen'>▹</span> JavaScript (ES6+)</li>
            <li className='flex items-center gap-2'><span className='text-textGreen'>▹</span> React</li>
            <li className='flex items-center gap-2'><span className='text-textGreen'>▹</span> Node.js</li>
            <li className='flex items-center gap-2'><span className='text-textGreen'>▹</span> Next.js</li>
            <li className='flex items-center gap-2'><span className='text-textGreen'>▹</span> Tailwind CSS</li>
            <li className='flex items-center gap-2'><span className='text-textGreen'>▹</span> PostgreSQL</li>
            <li className='flex items-center gap-2'><span className='text-textGreen'>▹</span> Ruby on Rails</li>
          </ul>
        </div>
        <div className='w-full lgl:w-1/3 h-80 relative group'>
          <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
            <div className='w-fit lgl:w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
              <Image className='rounded-lg h-full object-cover' src={profileImg} alt='profile image' />
              <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
            </div>  
          </div>
          <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
        </div>
      </div>
    </section>
  )
}

export default About
