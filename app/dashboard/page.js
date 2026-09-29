"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const page = () => {
 const { data: session } = useSession()
 const router = useRouter()
     useEffect(() => {
       if(!session){
        router.push("/login")
       }
     }, [session, router])
     
  return (
    <div>Dashboard</div>
  )
}

export default page