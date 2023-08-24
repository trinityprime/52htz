import React from 'react'
import '../styles/index.css'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-center h-24 mx-0 px-4 text-xl text-white'>
                <ul className='flex'>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact</li>
                    <li className='p-4'>More</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar