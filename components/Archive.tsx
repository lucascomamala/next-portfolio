import { useState } from 'react'
import { motion } from 'framer-motion'

import { ArchiveCard } from './'

const Archive = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center '>
        <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
        <p className='text-sm font-titleFont text-textGreen'>view the archive</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
        <ArchiveCard 
          title='Project Name'
          des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
          techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
          link=''
        />
        <ArchiveCard 
          title='Project Name'
          des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
          techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
          link=''
        />
        <ArchiveCard 
          title='Project Name'
          des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
          techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
          link=''
        />
        <ArchiveCard 
          title='Project Name'
          des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
          techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
          link=''
        />
        <ArchiveCard 
          title='Project Name'
          des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
          techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
          link=''
        />
        <ArchiveCard 
          title='Project Name'
          des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
          techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
          link=''
        />

        { showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard 
                title='Project Name'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
                link=''
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard 
                title='Project Name'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
                link=''
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard 
                title='Project Name'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
                link=''
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard 
                title='Project Name'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
                link=''
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard 
                title='Project Name'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
                link=''
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard 
                title='Project Name'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
                link=''
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard 
                title='Project Name'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
                link=''
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard 
                title='Project Name'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
                link=''
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard 
                title='Project Name'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                techs={['Reactjs', 'Tailwindcss', 'Nextjs']}
                link=''
              />
            </motion.div>
          </>
        )}
      </div>
      <div className='mt-12 flex items-center justify-center'>
        <button
          onClick={() => setShowMore(!showMore)}
          className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
        >
          { showMore ? "Show Less" : "Show More" }
        </button>
      </div>
    </div>
  )
}

export default Archive
