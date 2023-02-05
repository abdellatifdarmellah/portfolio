import React from 'react'
import Image from 'next/image';

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='text-[#8B9A46] uppercase text-xl tracking-widest'>About me</p>
                    <h2 className='py-4'>Who Am I ?</h2>
                    <p className='py-2 text-lg'>I have spent the last few years trying to find my passion, in 2016 it the first time 
                        I knew about trading, I liked this domain, I lost and made money and it was a good 
                        experience but in the last 2 years I wanted to learn a new skill I tried graphic design,
                        Video editing, and much more ... But the only domain that I liked a lot was programming
                        in general and especially Mobile developing. I started by learning the algorithms and 
                        I found it really hard but I gave it some time and I felt that I can make it. Then I 
                        started learnig mobile development but following some google courses and I got many 
                        informations and experiences so I made many projects (You can find them in projects section).
                        And now, I'm learning web development by making this portfolio with 
                        nextJS and CSS tailwind. 
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-sm shadow-[#EEEEEE] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in-out duration-300 cursor-pointer'>
                   <Image className='rounded-xl' src="/../public/assets/image2.jpg" alt="/" width='300' height='500'/>
                </div>
            </div>
        </div>
    )
}

export default About;