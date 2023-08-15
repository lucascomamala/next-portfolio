import { useState } from 'react'
import { motion } from 'framer-motion'

import { ArchiveCard } from './'

const Archive = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <motion.div className='max-w-contentContainer mx-auto px-4 pt-18 pb-32'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.3, duration: 1.5 }}
    >
      <div className='w-full flex flex-col items-center '>
        <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
        {/* TODO: Add archive */}
        {/* <p className='text-sm font-titleFont text-textGreen'>view the archive</p> */}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
        <ArchiveCard
          title='Blog on Rails'
          des='Full-stack blog app built with Ruby on rails. Users can create, edit, delete and publish blog posts. Users can also comment and leave likes on blog posts.'
          techs={['Ruby on Rails', 'Bootstrap', 'Devise']}
          link='https://blog-on-rails.onrender.com/users'
          github='https://github.com/lucascomamala/blog-on-rails'
        />
        <ArchiveCard 
          title='Recipes App'
          des='Full-stack recipe app built with Ruby on rails. Users can create, edit, delete and publish recipes. Users can also generate a shopping list based on the food items in the recipe against what they currently have.'
          techs={['Ruby on Rails', 'Bootstrap']}
          link='https://rails-recipes-qfno.onrender.com/'
          github='https://github.com/lucascomamala/rails-recipe-app'
        />
        <ArchiveCard 
          title='Film Festival Site'
          des='Responsive website for a film festival. Built with pure HTML/CSS/JS.'
          techs={['HTML', 'CSS', 'JS']}
          link='https://lucascomamala.github.io/the-portal-capstone/'
          github='https://github.com/lucascomamala/the-portal-capstone'
        />
        <ArchiveCard 
          title='Blackjack'
          des='Blackjack game coded in Java. Users can play against the computer. Made for a school project.'
          techs={['Java']}
          download='https://github.com/lucascomamala/Blackjack/archive/refs/heads/master.zip'
          github='https://github.com/lucascomamala/Blackjack'
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
    </motion.div>
  )
}

export default Archive
