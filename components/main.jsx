import React from 'react';
import Image from 'next/image';

const Main = () => {
    return (
        <div className='w-full h-fit md:h-screen p-2 flex items-center py-32 sm:py-16'> 
            <div className='max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8'>
                <div className='col-span-2 text-center lg:text-left'>
                    <h2 className='py-4'>Ben Aiche</h2>
                    <h2 className='py-4'>Abdel Madjid</h2>
                    <h2 className='py-4 flex flex-row justify-center lg:justify-start'>Mobile Developer <h2 className='text-[#8B9A46] flex flex-row px-2 sm:px-4'> & </h2> Trader</h2>
                    <p className='py-4  max-w-[700px]'>
                        I am a mobile developer specializing in building exceptional digital experiences. 
                        Currently, I am focused on building android applications while learning trading.
                    </p>
                    <div className='py-4'>
                        <button className='p-4 rounded-3xl hover:scale-105 ease-in duration-300 font-semibold text-xl'>Contact me!</button>
                    </div>
                </div>
                <div className='hidden w-full h-autop m-auto lg:flex items-center justify-center cursor-pointer'>
                    <Image src="/../public/assets/imageShape.png" alt="/" width='411' height='579' className='hover:scale-105 ease-in-out w-[411] h-[579] duration-300'/>
                </div>
            </div>
        </div>
    )
}
export default Main;