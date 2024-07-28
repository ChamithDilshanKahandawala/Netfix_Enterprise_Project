import React from 'react'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../component/TitleCards/Titlecards'
import Footer from '../../component/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} alt="" className='banner_img' />
          <div className="hero_caption">
            <img src={hero_title} alt="" className='caption_img'/>
            <p>Discovering his ties to a secret ancient order, a young man living
               in modern Istanbul embarks on a quest to save the city from an
                immortal enemy.</p>
                <div className="hero_btns">
                  <button className='btn'><img src={play_icon} alt="" />Play</button>
                  <button className='btn dark_btn' id='dark_btn'><img src={info_icon} alt="" />More Info</button>
                </div>
                <Titlecards/>
          </div> 
        </div>
        <div className="more_cards">
        <Titlecards title={"Blockbuster Movies"}/>
        <Titlecards title={"Only On Netflix"}/>
        <Titlecards title={"Upcomming"}/>
        <Titlecards title={"Topics For You"}/>
        </div>

        <Footer/>
    </div>
  )
}

export default Home