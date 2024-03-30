import React from 'react'


const NavBar = () => {
  return (
     
      
        
      <nav className="navbar text-slate-50">
          <ul className='float-left pl-40 mt-9'>
          <li><img src=".././public/logo.png" alt="image1" /></li>
        </ul>
        <ul className="nav-links flex  float-right space-x-4 pr-40 mt-9">
          <li><a href="#" className="hover:text-blue-700">Countries</a></li>
          <li><a href="#" className="hover:text-blue-700">Continents</a></li>
          <li><a href="#" className="hover:text-blue-700">Regions</a></li>
        </ul>
      </nav>

     
  
  )
}

export default NavBar