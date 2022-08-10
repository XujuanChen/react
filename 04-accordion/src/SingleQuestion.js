import React, {useState} from 'react'
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';

const SingleQuestion = ({title, info}) => {
  const [show, setShow] = useState(false);
  return (
    <article className='question-container'>
      <header className='question'>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShow(!show)}>
          { show ? <AiFillMinusCircle /> : <AiFillPlusCircle /> }
        </button>
      </header>
      { show && <p>{info}</p> }
    </article>
  )
}

export default SingleQuestion