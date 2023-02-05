import React from 'react'
import Image from 'next/image';
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='w-full lg:h-screen py-32 sm:py-16'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest text-[#8B9A46] uppercase'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* Left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-sm shadow-[#EEEEEE] rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in-out duration-300' src="/../public/assets/contactImage.jpg" alt="/" height="4460" width="2973"/>
                        </div>
                        <div>
                            <h2 className='py-2'>Name here</h2>
                            <p>Mobile developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's talk</p>
                        </div>
                        <div>
                            <p className='pt-8'>Connect with me!</p>
                            <div className='flex items-center justify-between py-4'>
                                <div className='rounded-full shadow-sm shadow-[#EEEEEE] p-6 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                    <Link href='https://www.instagram.com/aneeesss___/'>
                                        <AiOutlineInstagram />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-sm shadow-[#EEEEEE] p-6 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                    <Link href='https://www.facebook.com/profile.php?id=100005565856002'>
                                        <BsFacebook />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-sm shadow-[#EEEEEE] p-6 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                    <Link href='https://twitter.com/Abdelma67016880'>
                                        <AiOutlineTwitter />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className='col-span-3 w-full h-auto shadow-sm shadow-[#EEEEEE] rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='broder-2 rounded-lg p-3 flex border-[#EEEEEE]' type="text"/>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone number</label>
                                    <input className='broder-2 rounded-lg p-3 flex border-[#EEEEEE]' type="text"/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-[#EEEEEE]' type='email' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2 '>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-[#EEEEEE]' type='text' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-[#EEEEEE]' rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact;