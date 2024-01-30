import React from 'react'

const Service = (props) => {
    const {image,title,content} = props
    console.log(image)
  return (
    <div>
        <img src={process.env.PUBLIC_URL + image}/>
        <h4>{title}</h4>
        <p>{content}</p> 
    </div>
  )
}

export default Service