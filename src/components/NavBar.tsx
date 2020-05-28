import React from 'react'
import {NavLink} from 'react-router-dom'

export const NavBar:React.FC=()=>{
    return(
  
          <nav>
    <div className="nav-wrapper light-green darken-4 titleHeader">
      <a href="#" className="brand-logo">React+TypeScript</a>
      <ul  className="right hide-on-med-and-down">
        <li><NavLink to="/">Todo</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  </nav>)

}