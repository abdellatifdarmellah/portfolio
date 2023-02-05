import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Menu({setPage}) {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])
    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-sm shadow-[#EEEEEE] z-[100] bg-[#0F0E0E]' : 'fixed w-full h-20 z-[100] bg-[#0F0E0E]'}>
            {/* the actual navbar icon + list + menu button when the screen is small */}
            <div className='flex justify-between items-center w-full h-full px-10 xl:px-48'>
                {/* top left icon */}
                <Link href='/#' onClick={() => setPage('main')}>
                    <Image className='h-16 w-16 rounded-full border-[#8B9A46] border-4 cursor-pointer hover:scale-105 ease-in-out duration-300' src="/../public/assets/image1.jpg" alt="/" width='384' height='332'/>
                </Link>
                <div>
                    {/* menu; projects contact about */}
                    <ul className='hidden md:flex font-semibold md:space-x-16 lg:space-x-32 2xl:space-x-48'>
                        <Link href='#' onClick={() => setPage('projects')}>
                            <li className='text-lg hover:scale-110 ease-in-out duration-200 hover:text-[#8B9A46]'>Projects</li>
                        </Link>
                        <Link href='#' onClick={() => setPage('about')}>
                            <li className='text-lg hover:scale-110 ease-in-out duration-200 hover:text-[#8B9A46]'>About</li>
                        </Link>
                        <Link href='#' onClick={() => setPage('contact')}>
                            <li className='text-lg  hover:scale-110 ease-in-out duration-200 hover:text-[#8B9A46]'>Contact</li>
                        </Link>
                    </ul>
                    {/* hamburger menu; it get displayed when the screen is small*/}
                    <div onClick={handleNav} className='md:hidden hover:scale-105 ease-in duration-300 cursor-pointer'>
                        <AiOutlineMenu size={36}/>
                    </div>
                </div>
            </div>
            {/* shadow the page when its smaller and when the nav value equals true*/}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                {/* side menu; displayed when screen is smaller and when clicking on the hamburger menu means the value of nav is true
                if true first line else second line*/}
                <div 
                    className={
                        nav 
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0F0E0E] p-10 ease-in-out duration-500' 
                            : 'fixed left-[-150%] top-0  p-10 ease-in-out duration-500'
                    }
                    >
                        {/* icon on top let and close menu icon */}
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='#' onClick={() => setPage('main')}>
                                <Image src='/../public/assets/image1.jpg' alt='/' width='384' height='332' className='h-16 w-16 rounded-full border-[#8B9A46] border-4 cursor-pointer hover:scale-105 ease-in-out duration-300' onClick={() => setNav(false)}/>
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-sm hover:shadow-[#EEEEEE] p-3 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                                <AiOutlineClose size={18} />
                            </div>
                        </div>
                        <div className='border-b border-[#8B9A46] my-4'>
                            <p className='font-medium text-sm sm:text-lg py-4'>Let's build something legendary together!</p>
                        </div>
                    </div>
                    {/* vertical menu */}
                    <div className='py-4 flex flex-col'>
                        <ul className='font-semibold font-montserrat'>
                            <Link href='#' onClick={() => setPage('projects')}>
                                <li onClick={() => setNav(false)} className='py-6 sm:py-10 text-lg sm:text-xl hover:scale-x-95 ease-in-out duration-200 hover:text-[#8B9A46]'>Projects</li>
                            </Link>
                            <Link href='#' onClick={() => setPage('about')}>
                                <li onClick={() => setNav(false)} className='py-6 sm:py-10 text-lg sm:text-xl hover:scale-x-95 ease-in-out duration-200 hover:text-[#8B9A46]'>About</li>
                            </Link>
                            <Link href='#' onClick={() => setPage('contact')}>
                                <li onClick={() => setNav(false)} className='py-6 sm:py-10 text-lg sm:text-xl hover:scale-x-95 ease-in-out duration-200 hover:text-[#8B9A46]'>Contact</li>
                            </Link>
                        </ul>
                        {/* socials */}
                        <div className='py-12 sm:py-20'>
                            <p className='tracking-wide text-[#8B9A46] font-semibold py-8 sm:py-10'>Let's Connect</p>
                            <div className='flex items-center w-full space-x-8 sm:space-x-16 justify-between'>
                                <div className='rounded-full shadow-sm hover:shadow-[#EEEEEE] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                    <Link href='https://www.instagram.com/aneeesss___/'>
                                        <AiOutlineInstagram />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-sm hover:shadow-[#EEEEEE] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                    <Link href='https://www.facebook.com/profile.php?id=100005565856002'>
                                        <BsFacebook />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-sm hover:shadow-[#EEEEEE] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                    <Link href='https://twitter.com/Abdelma67016880'>
                                        <AiOutlineTwitter />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}