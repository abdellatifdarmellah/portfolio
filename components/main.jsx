import React from 'react';
import Image from 'next/image';

const Main = () => {
    return (
        <div className='w-full h-fit flex justify-center md:justify-between flex-col md:flex-row px-10 md:px-24'> 
            <div className=' w-fit h-fit py-36 flex flex-col text-center justify-center md:text-left md:justify-start mr-10'>
                <p className='font-semibold text-xl sm:text-2xl md:text-3xl tracking-[.2rem] sm:tracking-[.3rem] text-[#EEEEEE] pb-3 font-montserrat'>Ben Aiche</p>
                <p className='font-semibold text-xl sm:text-2xl md:text-3xl tracking-[.2rem] sm:tracking-[.3rem] text-[#EEEEEE] font-montserrat'>Abdel Madjid</p>
                <div className='flex flex-col'><p className='font-medium text-sm sm:text-xl lg:text-2xl md:w-[400px] lg:w-fit tracking-[.1rem] sm:tracking-[.3rem] py-8 font-montserrat'>Mobile Developer <span className='font-semibold text-lg sm:text-xl lg:text-3xl text-[#8B9A46] font-montserrat'>&</span> Trader</p></div>
                <p className='flex flex-col text-center justify-center md:text-left md:justify-start md:w-[400px] lg:w-[590px] font-normal pb-8 font-montserrat text-sm lg:text-lg'>I am a mobile developer specializing in building exceptional digital experiences. 
                    Currently, I am focused on building android applications while learning trading.</p>
                <div className='flex flex-row justify-center md:justify-start'>
                    <button>Contact me!</button>
                </div>
            </div>
            <div className='hidden md:flex object-right w-fit h-fit py-36 justify-end items-end cursor-pointer'>
                <Image src="/../public/assets/imageShape.png" alt="/" width='300' height='300' className='hover:scale-110 ease-in-out md:w-60 md:h-60 lg:w-fit lg:h-fit duration-300'/>
            </div>
        </div>
    )
}
export default Main;