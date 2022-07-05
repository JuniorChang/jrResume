import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('black')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor('#000000')
            } else {
                setColor('black')
                setTextColor('white')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


    return (
        <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>

                <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'><Link href='/'> J </Link></h1>

                <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                    <li className="p-4">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/Projects'>Projects</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/AboutMe'>About Me</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/ContactMe'>Contact Me</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
                </div>
                {/* Mobile Menu */}
                <div onClick={handleNav} className={
                    nav
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                    <ul>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/Projects'>Projects</Link>
                        </li >
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/AboutMe'>About Me</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/ContactMe'>Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar