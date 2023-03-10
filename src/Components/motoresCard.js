import React from 'react'

const Motores = ({motores,handleClic}) => {
    const {name, mainCategory, secondaryCategory, price, image} = motores;
    
  return (
  
      <div className='box__card'>
        <picture>
          <img src={image} alt="" />
        </picture>
          <h4>{name}</h4>
          <p>{mainCategory}</p>
          <p>{secondaryCategory}</p>
          <p>S/ {price}</p>
          <button onClick={() =>handleClic(motores)}>Agregar al Carrito</button>
        </div>
        
  )
}

export default Motores;
