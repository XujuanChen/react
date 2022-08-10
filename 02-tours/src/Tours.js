import Reac, { useState } from 'react';

const Tours = ({ tours, removeItem }) => {
    const [show, setShow] = useState(true);
    return(
        <section className='single-tour'>
            <div className='title'>
                <h2>Tour Hotels</h2>
                <div className='underline'></div>
            </div>
            {
                tours.map((tour)=>{
                    const {id, name, info, image, price} = tour;
                    return(
                        <section key={id}>
                            <img src={image} alt={name} />
                            <div className='tour-info'>
                                <h3>{name}</h3>
                                <h4 className='price'>${price}</h4>
                            </div>
                            <p className='show-info'>{show ? info : `${info.slice(0, 198)}......`}
                                <button className='btn' onClick={()=>setShow(!show)}>{show ? "show less": "show more"}</button>
                            </p>
                            <button className='btn delete-btn' onClick={()=>removeItem(id)}>not interest</button>
                        </section>
                    )
                })
            }
        </section>
    )
}

export default Tours