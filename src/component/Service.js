import React from 'react'

const Service = (props) => {
    const {image,title,content} = props
    
  return (
    <div className='mb-10'>
        <img alt='our work pictures' src={process.env.PUBLIC_URL + image}/>
        <h4 className='my-2 text-[#101828] font-medium '>{title}</h4>
        <p className='text-[#475467] text-sm text-justify'>{content}</p> 
    </div>
  )
}

export default Service