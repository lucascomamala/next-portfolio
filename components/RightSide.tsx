import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
      <a href='mailto:lucascomamala@gmail.com'>
        <p className='text-sm rotate-90 w-72 tracking-wide hover:text-textGreen mb-12'>lucascomamala@gmail.com</p>
      </a>
      <span className='w-[2px] h-36 bg-textDark inline-flex'></span>
    </div>
  )
}

export default RightSide
