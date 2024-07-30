import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar_left">
            <img src={logo} alt=""  />
            <ul>
             <li> <a href="#">Home</a> </li>
             <li> <a href="#">TV Shows</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">New & Populer</a></li>
              <li><a href="#">My List</a></li>
              <li><a href="#">Browse By Languages</a></li>
            </ul>
        </div>
        <div className="navbar_right">
          <img src={search_icon} alt="" className='icons'/>
          <p>Childrens</p>
          <img src={bell_icon} alt="" className='icons' />
          <div className="navbar_profile">
            <img src={profile_img} alt="" className='profile'/>
            <img src={caret_icon} alt="" />
            <div className="dropdown">
              <p>Sign Out of Netflix</p>
            </div>
          </div>

           

        </div>

    </div>
  )
}

export default Navbar