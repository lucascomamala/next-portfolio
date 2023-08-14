import Image from 'next/image'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

import { SectionTitle } from './'
import { reactTube, jacked } from '@/public/assets'

const Projects = () => {
  return (
    <section id="projects" className='max-w-container mx-auto lgl:px-20 py-32'>
      <SectionTitle title="Some things I've built" titleNo='03' />
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        {/* Project one */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a 
              href="https://react-you-tube.netlify.app/" 
              target='_blank' 
              className='w-full xl:w-1/2 h-auto relative group'
            >
              <div>
                <Image 
                  className='w-full h-full object-contain'
                  src={reactTube}
                  alt="ReactTube Image"
                />
                <div className='absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <div>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                  Featured Project
                </p>
                <h3 className='text-2xl font-bold'>
                  ReactTube
                </h3>
              </div>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                ReactTube is a youtube clone application built with <span className='text-textGreen'>React</span> utilizing Material UI, Emotion and RapidAPI. Sort by category, search for a specific video, and watch your favorite videos.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React</li>
                <li>Emotion</li>
                <li>RapidAPI</li>
                <li>MaterialUI</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                  href="https://github.com/lucascomamala/youtube-clone"
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <TbBrandGithub />
                </a>
                <a 
                  href="https://react-you-tube.netlify.app/"
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <a 
              href="https://jacked-fitness.netlify.app/" 
              target='_blank' 
              className='w-full xl:w-1/2 h-auto relative group'
            >
              <div>
                <Image 
                  className='w-full h-full object-contain'
                  src={jacked}
                  alt="Jacked Image"
                />
                <div className='absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
              <div>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                  Featured Project
                </p>
                <h3 className='text-2xl font-bold'>
                  ReactTube
                </h3>
              </div>
              <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                Jacked is an exercise database application built with <span className='text-textGreen'>React</span> utilizing Material UI, Emotion and RapidAPI. Browse different exercises by muscle group or equipment, look at similar exercises and watch videos on how to correctly perform the exercise.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React</li>
                <li>Emotion</li>
                <li>RapidAPI</li>
                <li>MaterialUI</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                  href="https://github.com/lucascomamala/jacked"
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <TbBrandGithub />
                </a>
                <a 
                  href="https://jacked-fitness.netlify.app/"
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project three */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a 
              href="https://react-you-tube.netlify.app/" 
              target='_blank' 
              className='w-full xl:w-1/2 h-auto relative group'
            >
              <div>
                <Image 
                  className='w-full h-full object-contain'
                  src={reactTube}
                  alt="ReactTube Image"
                />
                <div className='absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <div>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                  Featured Project
                </p>
                <h3 className='text-2xl font-bold'>
                  Third Project
                </h3>
              </div>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                ReactTube is a youtube clone application built with <span className='text-textGreen'>React</span> utilizing Material UI, Emotion and RapidAPI. Sort by category, search for a specific video, and watch your favorite videos.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React</li>
                <li>Emotion</li>
                <li>RapidAPI</li>
                <li>MaterialUI</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                  href="https://github.com/lucascomamala/youtube-clone"
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <TbBrandGithub />
                </a>
                <a 
                  href="https://react-you-tube.netlify.app/"
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
