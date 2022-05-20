import React from 'react'
import Card from './Card'
import image1 from '../assets/hombre.galaxia.jpg'
import image2 from '../assets/atardecer_futurista.jpg'
import image3 from '../assets/atardecer_ciudad_despegue.jpg';
import "../App.css"


const cards = [
    {
        id: 1,
        title: 'web',
        image: image1.style.width = '50px'
    },
    {
        id:2,
        title:'Blogs',
        image: image2
    },
    {
        id:3,
        title:'YOUTUBE',
        image: image3
    }

]

export default function Cards() {
  return (
      <div className='container d-flex justify-content-center aling-items-center h-100  bg-info'>
          <div className='row'>
              {
                  cards.map(card => (
                      <div className='col-md-4' key={card.id}>
                      <Card title={card.title} image={card.image}/>    
                      </div>
                  ))
              }
          </div>
          
      </div>
  )
}
