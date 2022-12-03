import React from 'react';
import './style.css';

const Card=({product})=>{
    console.log('product', product)
    const{CategoryId, Description, Image, name, Price, Stock}=product || {};

    return(
        <div className='card'>
            <img className='card-image' src="{Image}" alt="{name}" />
            <div className='card-content'>
                <h3 className='card-name'>{name}</h3>
                <p className='card-CategoryId'>{CategoryId}</p>
                <p className='card-Description'>{Description}</p>
                <p className='card-Price'>{Price}</p>
                <p className='card-Stock'>{Stock}</p>
            </div>
        </div>
    )
}

export default Card;