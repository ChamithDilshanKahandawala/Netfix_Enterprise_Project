import React from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const player = () => {
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe src="http://www/youtube.com.embed/hkHHwA-vEyQ" width='90%' height='90%'
       title='trailer' frameBorder='0' allowFullScreen></iframe>
       <div className="player_info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>

       </div>
       
    </div>
  )
}

export default player