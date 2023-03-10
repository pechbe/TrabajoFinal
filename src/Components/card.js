import React from 'react'
import '../Components/Card.css';


const Card = ({item,handleClick}) => {
    const {name, mainCategory, secondaryCategory, price, image} = item;
    
  return (
  
      <div className='box__card'>
        <picture className='box__img-card'>
          <img src={image} alt="" />
        </picture>
          <h4>{name}</h4>
          <p>{mainCategory}</p>
          <p>{secondaryCategory}</p>
          <p>S/ {price}</p>
          <button className=' button button-add-car' onClick={() =>handleClick(item)}>Agregar al Carrito</button>
          {/*<button className=' button button-add-view'>Ver mas</button>*/}
        </div>
  )
}

export default Card;
