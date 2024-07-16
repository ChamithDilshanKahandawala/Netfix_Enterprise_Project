import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_icons">
        <a href="https://web.facebook.com/netflix/?brand_redir=6275848869&_rdc=1&_rdr"><img src={facebook_icon} alt="" /></a>
        <a href="instagram.com/netflix"><img src={instagram_icon} alt="" /></a>
        <a href="https://youtube.com/@netflix?si=BEoc14o_V4UEQDMq"><img src={youtube_icon} alt="" /></a>
        <a href="https://x.com/netflix"><img src={twitter_icon} alt="" /></a>

        
      </div>

      <ul>
        <li><a href="#">Audio Description</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Gift Cards</a></li>
        <li><a href="#">Media Center</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Terms Of Use</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Cookie And Preferences</a></li>
        <li><a href="#">Coorporate information</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <p className='copyright_txt'>© 1997-2024 Netflix, Inc.</p>

    </div>
  )
}

export default Footer