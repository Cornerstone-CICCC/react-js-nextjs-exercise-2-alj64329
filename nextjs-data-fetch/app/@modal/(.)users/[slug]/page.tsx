import { User } from '@/app/users/page'
import Link from 'next/link'
import React from 'react'

type Props = {
    params:Promise<{slug:string}>
}

const page = async({params}: Props) => {
    const{ slug }= await params

    let user: User;
    
      try {
        const res = await fetch(`https://dummyjson.com/users/${slug}`)
        const data = await res.json()
        user = data

      } catch (err) {
        console.log(err)
        throw Error("Unable to show post")
      }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center">
      <div
      className="bg-white rounded-lg p-6 w-[50%] h-[50%] flex flex-col gap-4 text-black">
        <div className='w-full flex justify-end pb-4'>
            <a href="/users"
            className='w-fit'>X</a>
        </div>

        <div className='flex flex-col justify-center gap-4'>
            <h2>User Id:{user.id}</h2>
            <h2>First Name:{user.firstName}</h2>
            <h2>Last Name:{user.lastName}</h2>
        </div>

        
      </div>
    </div>
  )
}

export default page