import React from 'react'

const Service = (props) => {
    const {image,title,content} = props
    
  return (
    <div className='mb-10'>
        <img className = "w-full" alt='our work pictures' src={image}/>
        <div>
        <h4 className='my-2 text-[#101828] font-medium '>{title}</h4>
        <p className='text-[#475467] text-sm text-justify'>{content}</p> 
        </div>
    </div>
  )
}

export default Service