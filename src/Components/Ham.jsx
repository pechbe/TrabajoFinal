import React from 'react'
import '../Components/Ham.css'
// import Header from './Header'

const Ham = (props) => {
    return (
        <div class={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`} onClick={props.handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Ham
