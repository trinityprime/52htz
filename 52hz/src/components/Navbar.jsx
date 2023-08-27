import React from 'react'
import { Link } from 'react-scroll'
import '../styles/index.css'

const Navbar = () => {

    return (
        <>
            <div className='flex justify-center h-24 mx-0 px-4 text-xl text-white'>
                <ul className='flex p-4'>
                    <li className='p-4 hover:text-blue-200 hover:cursor-pointer hover:underline transition ease-in-out delay-50'>
                        <Link activeClass='active' smooth spy to="about">
                            ABOUT
                        </Link>
                    </li>
                    <li className='p-4 hover:text-blue-200 hover:cursor-pointer hover:underline transition ease-in-out delay-50'>
                        <Link activeClass='active' smooth spy to="Contact">
                            CONTACT
                        </Link>
                    </li>
                    <li className='p-4 hover:text-blue-200 hover:cursor-pointer hover:underline transition ease-in-out delay-50'>
                        <Link activeClass='active' smooth spy to="More">
                            MORE
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar