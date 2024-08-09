import React from 'react'

function Hero() {
  return (
    <main className='hero container'>

      <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quo asperiores, accusantium ipsum corrupti mollitia excepturi suscipit amet culpa libero, neque, tempore debitis tempora necessitatibus.</p>
      
      <div className="hero-buttons">
        <button>Shop Now</button>
        <button className='secondry-btn'>Category</button>
      </div>

      <div className="shopping">
        <p>Also Avilabee On</p>

        <div className='brand-icon'>
          <img src="public/images/flipkart.png" alt="image" />
          <img src="public/images/amazon.png" alt="image" />
        </div>

      </div>
      </div>

      <div className='hero-img'>
        <img src="public/images/hero-image.png" alt="hero image" />
      </div>
      
    </main>
  )
}

export default Hero
