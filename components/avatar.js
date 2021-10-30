import React from 'react'

function Avatar({url}) {
  return (
    <img 
      loading="lazy" 
      src={url} 
      alt="profile-pic"
      objectFit="cover"
      layout="fill"
      className="h-7 w-7 object-cover rounded-full cursor-pointer transition duration-100 transform hover:scale-105"
      >
      
    </img>
  )
}

export default Avatar;
