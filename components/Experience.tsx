import { useState } from 'react'

import { SectionTitle, ReactBD } from './'

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true)
  const [workNetflix, setWorkNetflix] = useState(false)
  const [workApple, setWorkApple] = useState(false)
  const [workGoogle, setWorkGoogle] = useState(false)
  const [workAmazon, setWorkAmazon] = useState(false)

  return (
    <section id='experience' className='max-w-containerXs mx-auto py-10 lgl:py-24 px-4'>
      <SectionTitle title='Where I have worked' titleNo='02'/>
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li 
            
            className='border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'
          >
            ReactDB
          </li>
          <li className='border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
            Google
          </li>
          <li className='border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
            Apple
          </li>
          <li className='border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
            Netflix
          </li>
          <li className='border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
            Amazon
          </li>
        </ul>
        <ReactBD />
      </div>
    </section>
  )
}

export default Experience
