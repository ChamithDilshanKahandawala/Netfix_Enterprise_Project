import React, { useEffect, useRef } from 'react'
import './Titlecards.css'
import card_data from '../../assets/cards/Cards_data'

const Titlecards = ({title,category}) => {

  const cardsRef = useRef();

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card_list" ref={cardsRef}>
        {card_data.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name} </p>
          </div>
        })

        }
      
      </div>

    </div>
    
  )
}

export default Titlecards