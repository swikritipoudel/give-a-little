import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-green-900 text-white flex justify-around items-center h-15 px-4'>
    <div className="logo cursor-pointer text-lg font-bold">GiveALittle!</div>
    <ul className='flex gap-10 cursor-pointer font-bold items-center'>
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Login</li>
    <li>Sign Up</li>
    </ul>
   </nav>
  )
}

export default Navbar