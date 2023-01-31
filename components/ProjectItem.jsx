import React from 'react'
import Image from 'next/image'

const ProjectItem = ({title, backgroundImg, language, description}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-sm shadow-[#EEEEEE] rounded-xl p-4 group hover:bg-[#002B5B]">
        <Image src={backgroundImg} alt="/" className="rounded-xl group-hover:opacity-10"/>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <p className="text-2xl tracking-wider text-center font-bold">{title}</p>
            <p className="pb-4 pt-2 text-center">{language}</p>
            <p className="pb-4 pt-2 text-center">{description}</p>
        </div>
    </div>
  )
}

export default ProjectItem; 