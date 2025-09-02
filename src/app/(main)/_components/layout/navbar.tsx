import React from 'react'
import Logo from '../ui/logo'
import Link from 'next/link'


function Navbar() {
  return (
    <div className='w-[90%] relative z-50 py-8 max-w-screen-2xl mx-auto flex justify-between items-center'>
      <Logo/>
      <div className='capitalize text-sm hidden md:flex items-center gap-8 opacity-80 tracking-wider font-thin' >
        <Link href={"/"}>Home</Link>
        <Link href={""}>What You Get</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Testimonials</Link>
        <Link href={""}>Contact Us</Link>
      </div>
      <button className='text-black bg-white p-2 px-4 rounded-sm text-sm' >
        Book a Demo
      </button>
    </div>
  )
}

export default Navbar