import React, {useState} from 'react'
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

const Review = () => {
  const [display, setDisplay] = useState(0);
  
  const prevPerson = () => {
    let newIndex = display - 1;
    if(newIndex < 0){
      newIndex = data.length - 1
    }
    setDisplay(newIndex);
  }
  const nextPerson = () => {
    let newIndex = display + 1;
    if(newIndex > data.length - 1){
      newIndex = 0;
    }
    setDisplay(newIndex);
  }
  const randomPerson = () => {
    let newIndex = Math.floor(Math.random() * data.length);
    setDisplay(newIndex)
  }


  const {name, job, image, text} = data[display];

  return (
    <section className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'><FaQuoteRight/></span>
      </div>
      <div className='info-container'>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{text}</p>
      </div>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
        <button className='random-btn' onClick={randomPerson}>surprise me</button>
        <button className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
      </div>
    </section>
  )
}

export default Review