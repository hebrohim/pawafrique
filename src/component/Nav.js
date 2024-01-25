import React from 'react'

const Nav = () => {
  return (
   <nav className=' my-5 h-[10vh] flex items-center justify-between'>
    <img  src={process.env.PUBLIC_URL + "/images/logo.svg"}/>
    <span className='text-[2rem] font-thin text-[#101828] '>&#9776;</span>
   </nav>
  )
}

export default Nav