import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <nav className='bg-green-900 text-white flex justify-around items-center h-15 px-4'>
    <div className="logo cursor-pointer text-lg font-bold flex justify-center items-center gap-2">
      <img src="/helping.gif" width={30} alt="" />
      <span>GiveALittle!</span>
      </div>
    {/* <ul className='flex gap-10 cursor-pointer font-bold items-center'>
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Login</li>
    <li>Sign Up</li>
    </ul> */}

    <div>
      <Link href={"/login"}>
      <button className="text-heading bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2 cursor-pointer">Login</button>
      </Link>
    </div>
   </nav>
  )
}

export default Navbar