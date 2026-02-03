import React from 'react'

const Header = (props) => {  

  const logoutUser=()=>{
    localStorage.setItem("loggedInUser","");
    props.changeUser('');
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'> Hello <br /> <span className='text-3xl font-semibold'>UserName 👋 </span> </h1>
      <button onClick={logoutUser} className='bg-red-600 font-medium text-lg text-white px-4 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header