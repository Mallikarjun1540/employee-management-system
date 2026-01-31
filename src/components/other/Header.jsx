import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'> Hello <br /> <span className='text-3xl font-semibold'>Mallikarjun 👋 </span> </h1>
      <button className='bg-red-600 font-medium text-lg text-white px-4 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header