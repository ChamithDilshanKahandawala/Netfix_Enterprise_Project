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
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Populer</li>
              <li>My List</li>
              <li>Browse By Languages</li>
            </ul>
        </div>
        <div className="anvbar_right">
          <img src={search_icon} alt="" className=''/>
          <p>Childrens</p>
          <img src={bell_icon} alt="" className='icons' />
          <div className="navbar_profile">
            <img src={profile_img} alt="" className='profile'/>
            <img src={caret_icon} alt="" />
          </div>

           

        </div>

    </div>
  )
}

export default Navbar