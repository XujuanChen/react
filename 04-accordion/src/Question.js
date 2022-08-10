import React, {useState} from 'react';
import data from './data';
import {AiFillPlusCircle, AiFillMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'

const Question = () => {
  const [items, setItems] = useState(data);
  const [text, setText] = useState(false);

  return (
    <section className='section'>

      {
        items.map((item)=>{
          const {id, title, info} = item;

          const handleClick = (e) => {
            const id = e.target.id;
            setText(!text)
          }
          return(
            <div className='question-container' key={id}>
              <div className='question'>
                <h4>{title}</h4>
                <button className='btn' onClick={(e) =>handleClick(e, e.target.id)}>
                  { text?<AiFillMinusCircle/> : <AiFillPlusCircle/> }
                </button>
              </div>
              <p className='answer'> { text && info }</p>
            </div>
          )
        })
      }
    </section>
  )
}

export default Question