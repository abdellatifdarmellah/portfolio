import React from 'react';
import Image from 'next/image';

const Main = () => {
    return (
        <div id='main' className='w-full h-screen grid md:grid-cols-5 m-auto py-16'> 
            <div className='w-full h-fit grid text-left col-start-2 col-span-2 mx-auto py-64'>
                <h2 className='py-4'>Ben Aiche Abdel Madjid</h2>
                <h2 className='py-4 flex flex-row'>Mobile Developer <h2 className='text-[#8B9A46] flex flex-row px-4'> & </h2> Trader</h2>
                <p className='py-4  max-w-[700px]'>
                    I am a mobile developer specializing in building exceptional digital experiences. 
                    Currently, I am focused on building android applications while learning trading.
                </p>
                <div className='py-4'>
                    <button className='p-4 rounded-3xl hover:scale-105 ease-in duration-300 font-semibold text-xl'>Contact me!</button>
                </div>
            </div>
            <div className='py-64 cursor-pointer'>
                <Image src="/../public/assets/imageShape.png" alt="/" width='384' height='332' className='hover:scale-105 ease-in-out w-[348px] h-[332px] duration-300'/>
            </div>
        </div>
    )
}
export default Main;