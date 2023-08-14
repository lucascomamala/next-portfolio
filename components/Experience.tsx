import { useState } from 'react'
import { motion } from 'framer-motion'

import { SectionTitle, ReactBD, Amazon, Apple, Google, Netflix } from './'

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true)
  const [workNetflix, setWorkNetflix] = useState(false)
  const [workApple, setWorkApple] = useState(false)
  const [workGoogle, setWorkGoogle] = useState(false)
  const [workAmazon, setWorkAmazon] = useState(false)

  const handleReactbd = () => {
    setWorkReactbd(true)
    setWorkNetflix(false)
    setWorkApple(false)
    setWorkGoogle(false)
    setWorkAmazon(false)
  }

  const handleNetflix = () => {
    setWorkReactbd(false)
    setWorkNetflix(true)
    setWorkApple(false)
    setWorkGoogle(false)
    setWorkAmazon(false)
  }

  const handleApple = () => {
    setWorkReactbd(false)
    setWorkNetflix(false)
    setWorkApple(true)
    setWorkGoogle(false)
    setWorkAmazon(false)
  }

  const handleGoogle = () => {
    setWorkReactbd(false)
    setWorkNetflix(false)
    setWorkApple(false)
    setWorkGoogle(true)
    setWorkAmazon(false)
  }

  const handleAmazon = () => {
    setWorkReactbd(false)
    setWorkNetflix(false)
    setWorkApple(false)
    setWorkGoogle(false)
    setWorkAmazon(true)
  }

  return (
    <motion.section 
      id='experience' 
      className='max-w-containerXs mx-auto py-32 px-4'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 2 }}
    >
      <SectionTitle title='Where I have worked' titleNo='02'/>
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li 
            onClick={handleReactbd}
            className={`${workReactbd ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            ReactDB
          </li>
          <li 
            onClick={handleGoogle}
            className={`${workGoogle ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li 
            onClick={handleApple}
            className={`${workApple ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
          <li 
            onClick={handleNetflix}
            className={`${workNetflix ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Netflix
          </li>
          <li 
            onClick={handleAmazon}
            className={`${workAmazon ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li>
        </ul>
        { workReactbd && <ReactBD /> }
        { workGoogle && <Google /> }
        { workApple && <Apple /> }
        { workNetflix && <Netflix /> }
        { workAmazon && <Amazon /> }
      </div>
    </motion.section>
  )
}

export default Experience
