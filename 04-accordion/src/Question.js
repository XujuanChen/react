import React from 'react';
import data from './data';
import SingleQuestion from './SingleQuestion';

const Question = () => {
  return (
    <section className='section'>
      {data.map((item)=>{
          return <SingleQuestion key={item.id} {...item}/>
        })}
    </section>
  )
}

export default Question