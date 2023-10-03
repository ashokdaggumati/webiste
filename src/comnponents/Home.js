import React, { useEffect, useState } from 'react'
import Reactl from './syam3.png'
import Reactn from'./ashokk80.png'
const ProductList = [
  {
    id: 1,
    ImageUrl: Reactl,
    title: 'Best Westren card...',
    location: '1 anzinger count',
    price: '$29',
  },
  {
    id: 2,
    ImageUrl: Reactn,
    title: 'Bell By Greene King inns ',
    location: '32923 judy Hill',
    price: '$25',
  },
  {
    id: 3,
    ImageUrl: Reactl,
    title: 'Half Moon,sherbrone by...',
    location: '6731 killdear park',
    price: '$32',
  },
  {
    id: 4,
    ImageUrl: Reactn,
    title: 'White Horse Hotel By...',
    location: '35 sherman park',
    price: '$25',
  },
  {
    id: 5,
    ImageUrl: Reactl,
    title: 'Best Westren card...',
    location: '1 anzinger count',
    price: '$29',
  },
  {
    id: 6,
    ImageUrl: Reactn,
    title: 'Bell By Greene King inns ',
    location: '32923 judy Hill',
    price: '$25',
  },
  {
    id: 7,
    ImageUrl: Reactl,
    title: 'Half Moon,sherbrone by...',
    location: '6731 killdear park',
    price: '$32',
  },
  {
    id: 8,
    ImageUrl: Reactn,
    title: 'White Horse Hotel By...',
    location: '35 sherman park',
    price: '$25',
  }


]
const Sections=[{
  id:1,
  ImageUrl:Reactl,
  location:'NEWYARK',
  properties:'18,222',
},
{
  id:2,
  ImageUrl:Reactl,
  location:'NEWYARK',
  properties:'18,222',
},
{
  id:3,
  ImageUrl:Reactl,
  location:'NEWYARK',
  properties:'18,222',
},
{
  id:4,
  ImageUrl:Reactl,
  location:'NEWYARK',
  properties:'18,222',
},
{
  id:4,
  ImageUrl:Reactl,
  location:'NEWYARK',
  properties:'18,222',
}
]


function Home() {
  const [list, setlist] = useState([])
 const[set,setset]= useState([])
  useEffect(() => {
    setlist([...ProductList])
    setset([...Sections])
  }, [])


  return (
    <div className='container-fluid home-main-container'  >
      <div className='d-flex'>
        <div className='col-xl-6 d-flex flex-column justify-content-center p-3 '>
          <h1>Hotel, car &<br /> experiences</h1>
          <h2 className='mb-4 mt-4'>Accompanying us, you have a trip full of experiences. With 
            Chisfis, booking accommodation, resort villas, hotels</h2>
          <button className='btm'>start your serch</button>
        </div>
        <div className='col-xl-6'>
          <img className='home-img' src='https://chisfis-template.vercel.app/static/media/hero-right.ee78c0ffae92062cbe4e.png' />
        </div>
      </div>
 <div className='conataner-d '>
        <h1>Featured places to stay</h1>
        <p>Popular places to stay that Chisfis recommends for you</p>
        
      <ul className='cards-4 d-flex justify-content-between mt-5 mb-5 '>
         {set.map((eachSections)=>{
          return(
            <li className='col-xl-2 heading-li' key={eachSections.id}>
              <img className=' img-m1 w-100 ' src={eachSections.ImageUrl} alt='ggffu'/>
              <p>{eachSections.location}</p>
              <p>{eachSections.properties}</p>
            </li>
          )
         })} 
      </ul>
      </div>
      <ul className='cards-con d-flex row p-0'>
        {list.map((eachProduct) => {
          return (
            <li className='col-xl-3' key={eachProduct.id}>
              <img className='img100' src={eachProduct.ImageUrl} alt='jdf' />
              <h5>{eachProduct.title}</h5>
              <p>{eachProduct.location}</p>
              <p>{eachProduct.price}</p>
            </li>
          )
        }
        )}
      </ul>
      </div>
    
  )
}

export default Home