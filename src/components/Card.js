import React from 'react'

import "../App.css"

export default function Card({title, image}) {
  return (
    <div className='card text-center bg-dark'>
      <img src={image} alt=''/>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
        Veniam adipisicing anim quis aute laborum consequat non. Occaecat sit deserunt nulla minim tempor laboris consectetur ullamco enim. Minim quis exercitation laboris exercitation. 
        </p>
        <a href='#!' className='btn btn-outline-secondary rounded-0' target="_blank">
          website
        </a>
      </div>
    </div>
  )
}
