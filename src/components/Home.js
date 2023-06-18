import React from 'react'
import img1 from '../images/1.png'

function Home() {
  return (
    <div className='text-center'>
        <p className="display-2 text-info">PORSCHE 911</p>  
        <img src={img1} alt="w-10" />
        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates aliquid, ad earum accusantium ipsum doloribus omnis eveniet at maiores officiis sed laborum iusto magnam dolorum excepturi, dolore tenetur in.</p>
    </div>
  )
}

export default Home
