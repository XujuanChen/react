import React from 'react';


const Categories = ({categories, filterItems}) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index)=>{
        return(
          <button className='btn-container'
            onClick={()=>filterItems(category)}
            type='button'
            key={index}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories