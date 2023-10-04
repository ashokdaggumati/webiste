import React from 'react'

function Listingpage() {
  return (
  
    <div className='container-fluid home-main-container'  >
      <div className='d-flex'>
        <div className='col-xl-6 d-flex flex-column justify-content-center p-3 '>
          <h1>Tokyo, Jappan</h1>
          <h2 className='mb-4 mt-4'>Accompanying us, you have a trip full of experiences. With
            Chisfis, booking accommodation, resort villas, hotels</h2>
          <button className='btm'>start your serch</button>
        </div>
        <div className='col-xl-6'>
          <img className='home-img' src='https://chisfis-template.vercel.app/static/media/hero-right2.48e4cfddb1d4706b7139.png' />
        </div>
      </div>
      </div>
  )
}

export default Listingpage