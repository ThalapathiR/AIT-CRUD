import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
    <div>
         <div className='nav' >
          
        <ul>
            
          <Link to='/' ><li>Home</li></Link>
          <Link to='/user' ><li>user</li></Link>
          <Link to='/page' ><li>Page</li></Link>
        
        </ul>
      </div>
    </div>
  )
}
