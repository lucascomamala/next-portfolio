import { ArchiveCard } from './'

const Archive = () => {
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
      </div>
    </div>
  )
}

export default Archive
