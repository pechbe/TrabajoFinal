import React, { useEffect, useState } from 'react';
import imgCarrito from '../assets/img/images/carrito-de-compras.png'
import "../Components/Cart.css";
import Modal from "../Components/Modal";
import styled from "styled-components";
import swal from 'sweetalert';

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoBtnMsj, cambEstBtnMsj] = useState(false);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    const mostrarModal = () =>{
      cambiarEstadoModal1(!estadoModal1)
      cambEstBtnMsj(false)
    }

    const mostrarAlerta=()=>{
      swal({
        text:"Su compra ha sido realizada",
        icon: "success",
        button: "Aceptar"
      });
    }

    // const handleAmont = (id) =>{
    //   const cont = cart.map((item) => {
    //     if(item.id === id){
    //       return {
    //         ...item,
    //         amount: item.amount + 1
    //       }
    //     }
    //     return item
    //   })
    // }

    const recorrer = () =>{
      const parentlist =document.querySelector('#det__cart');
      const listChildren = parentlist.childNodes;

      for (let i=0; i< listChildren.length; i++){
        
        let elemento = listChildren[i].querySelector('#item_name');
        console.log(elemento.innerText)

        let elemento2 = listChildren[i].querySelector('#item_amount');
        console.log(elemento2.innerText)

        let elemento3 = listChildren[i].querySelector('#item_price');
        console.log(elemento3.innerText)

        document.getElementById("tabla").innerHTML += '<tbody><td>'+ elemento.innerText +'</td><td>'+ elemento2.innerText +'</td><td>'+ elemento3.innerText +'</td></tbody>'
        
        
      };
      const head1 = document.getElementById("head1")
      head1.textContent = "Descripción";

      const head2 = document.getElementById("head2")
      head2.textContent = "Cantidad";

      const head3 = document.getElementById("head3")
      head3.textContent = "Precio";

      cambEstBtnMsj(!estadoBtnMsj)
      
    }
 
    useEffect(() => {
        handlePrice();
    });



  return (
    <article className='box__cart'>
      
      <h1 className='carrito_h1'>Carrito de compras</h1>
      {cart.length === 0 ? 
      <div className='cont__cart'>
        <div className='box__cart-vacio'>
          <picture>
            <img src={imgCarrito} alt="" />
          </picture>
          <h2 className='carrito_h2'>CARRITO VACIO</h2>
        </div>
      </div>  
      : null}
      {/* const effee = document.getElement */}
      <div className='det__cart' id = 'det__cart'>
        {cart.map((item) => (
          
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.image} alt="" />
              <p id='item_name' >{item.name}</p>
            </div>
            <div className="item_amount">
              <button onClick={() => handleChange(item, -1)}>-</button>
              <button id='item_amount' >{item.amount}</button>
              <button onClick={() => handleChange(item, 1)}>+</button>
            </div>
            <div>
              <span id = 'item_price'>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="total">
        <span className='price price-1'>Monto total</span>
        <span className='price price-2'>S/  {price}</span>
        <ContenedorBotones>
          <Boton0 onClick={mostrarModal}>Resumen de venta</Boton0>
        </ContenedorBotones>
      </div>

        <Modal
          estado = {estadoModal1}
          cambiarEstado = {cambiarEstadoModal1}
        >
          <table className="table" id ="tabla">
              <thead className='thead-inverse'>
                <tr>
                <th id = "head1">Desea ver el Resumen de venta?</th>
                <th id = "head2"></th>
                <th id = "head3"></th>
                </tr>
              </thead>
            </table>

          <Contenido>
            <div id='buttons-modal'>
              <Boton0 id = "confirmar" hidden ={estadoBtnMsj} onClick={recorrer}>Si</Boton0>
              <Boton1 id='btn-comprar' onClick={mostrarAlerta} hidden ={!estadoBtnMsj} >Comprar</Boton1>
              <Boton2 id='btn-salir' onClick={()=>cambiarEstadoModal1(!estadoModal1)} >Salir</Boton2>
            </div>
            
            <div id='montoT'>
              <b><span hidden ={!estadoBtnMsj}>Monto total: </span> </b>
              <b><span hidden ={!estadoBtnMsj}>S/.{price}</span> </b>
            </div>
          </Contenido>
        </Modal>
       
    </article>
  );
};

export default Cart;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton0 = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: black;
	border: n2px;
	background: white;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: black;
    color: white;
	}
`;

const Boton1 = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: green;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: green;
	}
`;

const Boton2 = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: red;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: red;
	}
`;

const Contenido = styled.div`
  display: flex;
  align-items: space-between;
  
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}

  #buttons-modal{
    display: flex;
    justify-content: space-between;
  }

  #montoT{
    margin-left: 60px;
  }

  #btn-salir{
    margin-left: 15px;
  }
`;
