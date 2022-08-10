import React, {useState} from 'react';

const List = ({people}) => {
  return (
    <div >
        {people.map((person)=>{
            const {id, name, age, image} = person;
            return(
                <article key={id} className='info'>
                    <div className='photo'>
                        <img src={image} alt={name} />
                    </div>

                    <div>
                        <h4>{name}</h4>
                        <p>{age} years old</p>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default List