import React from 'react'

function Image({image}) {
  return (

    <img className="single-photos" src={image.urls.thumb} alt="" />
    
  )
}

export default Image
