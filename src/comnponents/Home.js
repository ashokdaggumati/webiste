import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Reactl from './syam3.png'
import Reactn from './ashokk80.png'
import R from './b1.png'
import r1 from './b2.png'
import r2 from './b3.png'
import r3 from './b4.png'
import r4 from './d5.png'
import s1 from './s1.png'
import s2 from './s2.png'
import s3 from './s3.png'
import s4 from './s4.png'
import s5 from './s5.png'
import s6 from './s6.png'
import m1 from './m1.png'
import m2 from './m2.png'
import m3 from './m3.png'
import m4 from './m4.png'
import l1 from './l1.png'
import l2 from './l2.png'
import l3 from './l3.png'
import l4 from './l4.png'
import l5 from './l5.png'
import l6 from './l6.png'
import h1 from './h1.png'
import h2 from './h2.png'
import h3 from './h3.png'
import h4 from './h4.png'
import { BsGem } from "react-icons/bs";
import {AiFillFacebook } from "react-icons/ai";
import {AiOutlineYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import {BsInstagram } from "react-icons/bs";
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
    ImageUrl: s1,
    title: 'Half Moon,sherbrone by...',
    location: '6731 killdear park',
    price: '$32',
  },
  {
    id: 4,
    ImageUrl: s2,
    title: 'White Horse Hotel By...',
    location: '35 sherman park',
    price: '$25',
  },
  {
    id: 5,
    ImageUrl: s3,
    title: 'Best Westren card...',
    location: '1 anzinger count',
    price: '$29',
  },
  {
    id: 6,
    ImageUrl: s4,
    title: 'Bell By Greene King inns ',
    location: '32923 judy Hill',
    price: '$25',
  },
  {
    id: 7,
    ImageUrl: s5,
    title: 'Half Moon,sherbrone by...',
    location: '6731 killdear park',
    price: '$32',
  },
  {
    id: 8,
    ImageUrl: s6,
    title: 'White Horse Hotel By...',
    location: '35 sherman park',
    price: '$25',
  }


]
const Sections = [{
  id: 1,
  ImageUrl: R,
  location: 'SINGAPUR',
  properties: '18,222 properties',
},
{
  id: 2,
  ImageUrl: r1,
  location: 'NEWYARk',
  properties: '18,222 properties',
},
{
  id: 3,
  ImageUrl: r2,
  location: 'PARIES',
  properties: '12,987 properties',
},
{
  id: 4,
  ImageUrl: r3,
  location: 'TOKOY',
  properties: '18,222',
},
{
  id: 4,
  ImageUrl: r4,
  location: 'NEWYARK',
  properties: '18,222',
}
]
const Discovery = [{
  id: 1,
  ImageUrl: m1,
  title: 'Enjoy The Grete cool',
  properties: '188,288 properties'
},
{
  id: 1,
  ImageUrl: m2,
  title: 'Enjoy The Grete cool',
  properties: '188,288 properties'
},
{
  id: 1,
  ImageUrl: m3,
  title: 'Enjoy The Grete cool',
  properties: '188,288 properties'
},
{
  id: 1,
  ImageUrl: m4,
  title: 'Enjoy The Grete cool',
  properties: '188,288 properties'
}
]
const TopNumbers = [
  {
    id: 1,
    ImageUrl: l1,
    title: 'Truelock Alric',
    location: 'New York',
    ratting: 'rattin:3'
  },
  {
    id: 2,
    ImageUrl: l2,
    title: 'Birrell Charriot',
    location: 'New York',
    ratting: 'rattin:3'
  },
  {
    id: 3,
    ImageUrl: l3,
    title: 'Foulcher Nathanil',
    location: 'New York',
    ratting: 'rattin:3'
  },
  {
    id: 4,
    ImageUrl: l4,
    title: 'Falconer Agnes',
    location: 'New York',
    ratting: 'rattin:3'
  },
  {
    id: 5,
    ImageUrl: l5,
    title: 'Tousy Vita',
    location: 'New York',
    ratting: 'rattin:3'
  }, {
    id: 6,
    ImageUrl: l6,
    title: 'Friar Donna',
    location: 'New York',
    ratting: 'rattin:3'
  },
  {
    id: 2,
    ImageUrl: l2,
    title: 'Royal Segei',
    location: 'New York',
    ratting: 'rattin:3'
  },
  {
    id: 2,
    ImageUrl: l4,
    title: 'Sleite Claudetta',
    location: 'New York',
    ratting: 'rattin:3'
  },
  {
    id: 2,
    ImageUrl: l6,
    title: 'Pillifont vern',
    location: 'New York',
    ratting: 'rattin:3'
  },
  {
    id: 2,
    ImageUrl: l3,
    title: 'Fones Mini',
    location: 'New York',
    ratting: 'rattin:3'
  }
]
const Stays=[{
  id:1,
  ImageUrl:h1,
  title:'Nacher House',
  properties:'18,576 properties'
},
{
  id:2,
  ImageUrl:h2,
  title:'Wooden House',
  properties:'18,576 properties'
},
{
  id:3,
  ImageUrl:h3,
  title:' House Boat',
  properties:'18,576 properties'
},
{
  id:4,
  ImageUrl:h4,
  title:' Form House',
  properties:'18,576 properties'
},
{
  id:5,
  ImageUrl:h2,
  title:' Form House',
  properties:'18,576 properties'
}

]



function Home() {
  const [list, setlist] = useState([])
  const [set, setset] = useState([])
  const [like, setlike] = useState([])
  const [lite, setlite] = useState([])
  const [line,setline] =useState([])
  useEffect(() => {
    setlist([...ProductList])
    setset([...Sections])
    setlike([...Discovery])
    setlite([...TopNumbers])
    setline([...Stays])
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
        <h1>Heading of sections</h1>
        <p>Descriptions for sections</p>

        <ul className='cards-4 d-flex justify-content-between mt-5 mb-5 '>
          {set.map((eachSections) => {
            return (
              <li className='col-xl-2 heading-li' key={eachSections.id}>
                <img className=' img-m1 w-100 ' src={eachSections.ImageUrl} alt='ggffu' />
                <p>{eachSections.location}</p>
                <p>{eachSections.properties}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='conatair-d '>
        <h1>Featured places to stay</h1>
        <p>Popular places to stay that Chisfis recommends for you</p>
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
      <div className=' name mt-10  text-center'>
        <h1>Suggestions for discovery</h1>
        <p>Popular places to stay that Chisfis recommends for you</p>
        <ul className='card-pon d-flex row p-0 text-start'>
          {like.map((eachDiscovery) => {
            return (
              <li className='col-xl-3' key={eachDiscovery.id}>
                <img className='img10' src={eachDiscovery.ImageUrl} alt='jdf' />
                <h5>{eachDiscovery.title}</h5>
                <p>{eachDiscovery.properties}</p>

              </li>
            )
          }
          )}
        </ul>
      </div>
      <div className=' main  text-center '>
        <h1>Top 10 author of the month</h1>
        <p>Rating based on customer reviews</p>
        <ul className='card-pon d-flex row p-0 text-start'>
          {lite.map((eachTopNumbers) => {
            return (
              <li className='holl-li text-center col-xl-3' key={eachTopNumbers.id}>
                <img className='img0 ' src={eachTopNumbers.ImageUrl} alt='jknh' />
                <h5>{eachTopNumbers.title}</h5>
                <p>{eachTopNumbers.location}</p>
                <p>{eachTopNumbers.ratting}</p>
              </li>
            )
          }
          )}
          <div className=' class '>
            <h5 className=''>show me more</h5>
            <button className='btl '>Become a host</button>
          </div>
        </ul>
      </div>
      <div className='conainer-id'>
        <h1>Explore by types of stays</h1>
        <p>Explore houses based on 10 types of stays</p>

        <ul className='cards-4 d-flex justify-content-between mt-5 mb-5 '>
          {line.map((eachStays) => {
            return (
              <li className='col-xl-2 heading-li' key={eachStays.id}>
                <img className=' img-m1 w-100 ' src={eachStays.ImageUrl} alt='ggffu' />
                <p>{eachStays.title}</p>
                <p>{eachStays.properties}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
      <ReactPlayer width='100%' height='100vh' controls='true' url='https://youtu.be/Ao7e4iisKMs?si=ttAs5q5coVhalUdj' />
      </div>
        <div className='footer' >
           <div>
            <h1><BsGem />.fis </h1>
            <p><AiFillFacebook/>Facebook</p>
            <p><BsTwitter/>Twitter</p>
            <p><AiOutlineYoutube/>Youtube</p>
            <p><BsInstagram/>Instagram</p>
           </div>
          <div>
          <h3>Getting started</h3>
          <p>installetion</p>
          <p>Release Notes</p>
          <p>Upgrade Guide</p>
          <p>Browser Support</p>
          <p>Editor Support</p>
        </div>
        <div>
          <h3>Explore</h3>
          <p>Design features</p>
          <p>Prototyping</p>
          <p>Design systems</p>
          <p>Pricing</p>
          <p>Security</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p>best Practies</p>
          <p>Support</p>
          <p>Developer</p>
          <p>Learn design</p>
          <p>Releases</p>
        </div>
        <div>
          <h3>Community</h3>
          <p>discussion</p>
          <p>Code of Conduct</p>
          <p>Community Resources</p>
          <p>Contributing</p>
          <p>Concurrent Mode</p>
        </div>
    </div>
    </div>

  )
}

export default Home