import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

// method to open the side menu depending on the value of the nav value
// every time I click the value is changing from true to false or from false to true
// if its true the menu is displayed, if its false the menu is hidden 
const Navbar = () => {
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
        <div className={shadow ? 'fixed w-full h-20 shadow-sm shadow-[#EEEEEE] z-[100]' : 'fixed w-full h-20 z-[100]'}>
            {/* the actual navbar icon + list + menu button when the screen is small */}
            <div className='flex justify-between items-center w-full h-full px-10 md:px-64'>
                {/* top left icon */}
                <Image className='h-16 w-16 rounded-full border-[#8B9A46] border-4 cursor-pointer hover:scale-105 ease-in-out duration-300' src="/../public/assets/image1.jpg" alt="/" width='384' height='332'/>
                <div>
                    {/* menu; projects contact about */}
                    <ul className='hidden md:flex font-montserrat font-semibold md:space-x-16 lg:space-x-32 2xl:space-x-48'>
                        <Link href='/'>
                            <li className='text-lg hover:scale-110 ease-in-out duration-200 hover:text-[#8B9A46]'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='text-lg hover:scale-110 ease-in-out duration-200 hover:text-[#8B9A46]'>About</li>
                        </Link>
                        <Link href='/'>
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
                            <Image src='/../public/assets/image1.jpg' alt='/' width='64' height='64' className='object-cover h-12 w-12 sm:h-16 sm:w-16 rounded-full border-[#8B9A46] border-4 cursor-pointer hover:scale-110 ease-in-out duration-300'/>
                            <div onClick={handleNav} className='rounded-full shadow-sm hover:shadow-[#EEEEEE] p-3 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                                <AiOutlineClose size={18} />
                            </div>
                        </div>
                        <div className='border-b border-[#8B9A46] my-4'>
                            <p className='font-medium text-xs sm:text-sm py-4'>Let's build something legendary together!</p>
                        </div>
                    </div>
                    {/* vertical menu */}
                    <div className='py-4 flex flex-col'>
                        <ul className='font-semibold font-montserrat'>
                            <Link href='/'>
                                <li className='py-3 sm:py-4 text-sm sm:text-xl hover:scale-x-95 ease-in-out duration-200 hover:text-[#8B9A46]'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-3 sm:py-4 text-sm sm:text-xl hover:scale-x-95 ease-in-out duration-200 hover:text-[#8B9A46]'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-3 sm:py-4 text-sm sm:text-xl hover:scale-x-95 ease-in-out duration-200 hover:text-[#8B9A46]'>Contact</li>
                            </Link>
                        </ul>
                        {/* socials */}
                        <div className='py-16 sm:py-24'>
                            <p className='tracking-widest text-[#8B9A46] font-montserrat font-medium pb-5 sm:pb-10'>Let's Connect</p>
                            <div className='flex items-center w-full space-x-8 sm:space-x-16 justify-between'>
                                <div className='rounded-full shadow-sm hover:shadow-[#EEEEEE] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                    <AiOutlineInstagram />
                                </div>
                                <div className='rounded-full shadow-sm hover:shadow-[#EEEEEE] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                    <BsFacebook />
                                </div>
                                <div className='rounded-full shadow-sm hover:shadow-[#EEEEEE] p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                                    <AiOutlineTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar