import React from 'react'
import { Nav } from './Nav'
import img1 from '../src/images/logoait.jpg'
export const Home = () => {
  return (
    <div>
        <Nav/>
        <div  className='imgg'>
            <h1>Logo</h1>
            <img   src= {img1}></img>
        </div>
    </div>
  )
}
