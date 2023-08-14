import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

interface Props {
  title: string;
  des: string;
  techs: string[];
  link: string;
}

const ArchiveCard = ({ title, des, techs, link }: Props) => {
  return (
    <a href={link} target='_blank'>
      <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
        <div className='flex justify-between items-center text-4xl'>
          <FaRegFolder className='text-textGreen' />
          <RxOpenInNewWindow className='hover:text-textGreen' />
        </div>
        <div>
          <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>{title}</h2>
          <p className='text-sm mt-3'>{des}</p>
        </div>
        <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-start flex-wrap'>
          {techs.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </a>
  )
}

export default ArchiveCard
