import React from 'react'

const Service = (props) => {
    const {image,title,content} = props
    
  return (
    <div>
        <img alt='our work pictures' src={process.env.PUBLIC_URL + image}/>
        <h4>{title}</h4>
        <p>{content}</p> 
    </div>
  )
}

export default Service