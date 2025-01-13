import React from 'react'

function Stripe({val}) {
 
  return (
    <div className='w-[16.66%] py-4 px-5 border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] border-zinc-600 flex items-center justify-between'>
      <img className='w-[50%]' src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
