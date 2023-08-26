import Image from 'next/image'
import { motion } from 'framer-motion'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

import { SectionTitle } from './'
import { reactTube, jacked, y, dashboard } from '@/public/assets'

const Projects = () => {
  return (
    <motion.section id="projects" className='max-w-container mx-auto lgl:px-20 py-32'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 1.5 }}
    >
      <SectionTitle title="Some things I've built" titleNo='03' />
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        {/* Project one */}
        <motion.div className='w-full flex flex-col items-center justify-center gap-28 mt-10'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col xl:flex-row gap-6'>
            <a 
              href="https://y-blond-kappa.vercel.app/" 
              target='_blank' 
              className='w-full xl:w-1/2 h-auto relative group'
            >
              <div>
                <Image 
                  className='w-full h-full object-contain'
                  src={y}
                  alt="y Image"
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
                  Y
                </h3>
              </div>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                Y is a social media application that lets you quickly share short thoughts with your friends and the rest of the world. Built with <span className='text-textGreen'>Nextjs</span> and <span className='text-textGreen'>TailWind CSS</span> and utilizing <span className='text-textGreen'>MongoDB</span> and <span className='text-textGreen'>Clerk</span> for a powerful backend, Y is a fullstack application that allows users to create an account, post, and comment on posts as well as create and join different communities.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Nextjs</li>
                <li>Clerk</li>
                <li>TailWind CSS</li>
                <li>MongoDB</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                  href="https://github.com/lucascomamala/y"
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <TbBrandGithub />
                </a>
                <a 
                  href="https://y-blond-kappa.vercel.app/"
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project two */}
        <motion.div className='w-full flex flex-col items-center justify-center gap-28 mt-10'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <a 
              href="https://admin-frontend-vsly.onrender.com/dashboard" 
              target='_blank' 
              className='w-full xl:w-1/2 h-auto relative group'
            >
              <div>
                <Image 
                  className='w-full h-full object-contain'
                  src={dashboard}
                  alt="Dashboard Image"
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
                  Admin Dashboard
                </h3>
              </div>
              <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                Admin dashboard is a mock dashboard for an e-commerce company/website. Full-stack application built with a MERN stack leveraging <span className='text-textGreen'>Redux</span> for state management. Tracks different key metrics and displays them in a clean and easy to read way. Utilizes <a href='https://nivo.rocks/' target='_blank'><span className='text-textGreen underline'>nivo</span></a> for data visualization, <a href='https://mui.com/material-ui/' target='_blank'><span className='text-textGreen underline'>Material UI</span></a> for a clean looking user interface, and <a href='https://emotion.sh/docs/introduction' target='_blank'><span className='text-textGreen underline'>Emotion</span></a> for styling.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node</li>
                <li>Redux</li>
                <li>RapidAPI</li>
                <li>MaterialUI</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a 
                  href="https://github.com/lucascomamala/mern-dashboard"
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <TbBrandGithub />
                </a>
                <a 
                  href="https://admin-frontend-vsly.onrender.com/dashboard"
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project three */}
        <motion.div className='w-full flex flex-col items-center justify-center gap-28 mt-10'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        {/* Project Four */}
        <motion.div className='w-full flex flex-col items-center justify-center gap-28 mt-10'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          viewport={{ once: true }}
        >
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
                  Jacked
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
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects
