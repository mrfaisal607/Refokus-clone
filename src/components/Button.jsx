import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (
    <div className='min-w-70 px-3 py-2 bg-zinc-200 text-black rounded-full flex items-center justify-between  gap-5 '>
      <span className='text-sm font-semibol '>{title}</span>
      <IoIosReturnRight />
    </div>
  )
}

export default Button
 