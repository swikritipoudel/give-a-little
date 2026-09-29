"use client"

import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'

const Navbar = () => {
  const { data: session } = useSession()
  console.log(session)

  const [showdropdown, setshowdropdown] = useState(false)
  
  return (
   <nav className='bg-green-900 text-white flex justify-around items-center h-15 px-4'>
      <Link href={"/"} className="logo cursor-pointer text-lg font-bold flex justify-center items-center gap-2">
      <img src="/helping.gif" width={30} alt="" />
      <span>GiveALittle!</span>
      </Link>
     
    {/* <ul classNameName='flex gap-10 cursor-pointer font-bold items-center'>
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Login</li>
    <li>Sign Up</li>
    </ul> */}

    <div>
     
      {session && <>
<button onBlur={()=> {setTimeout(()=> {setshowdropdown(false)},100)}}  onClick={()=>setshowdropdown(!showdropdown)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none text-heading bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2 cursor-pointer" type="button">
  {session.user.name}
  <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
</button>

{/* <!-- Dropdown menu --> */}
<div id="dropdownHover" className={`z-10 ${showdropdown?"":"hidden"} bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44 absolute bg-green-800`}>
    <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownHoverButton">
      <li>
        <Link href ="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard </Link>
      </li>
      <li>
        <Link href ="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
      </li>
      <li>
        <Link onClick={()=>signOut()} href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link>
      </li>
    </ul>
</div>
</>}
      

      {/* {session && <Link href={"/signout"}>
      <button className="text-heading bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2 cursor-pointer">SignOut</button>
      </Link> } */}


 {!session &&
      <Link href={"/login"}>
      <button className="text-heading bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2 cursor-pointer">Login</button>
      </Link>}
    </div>
   </nav>
  )
}

export default Navbar