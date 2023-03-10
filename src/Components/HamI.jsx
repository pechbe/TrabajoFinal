import React from 'react'
import '../Components/HamI.css'
// import Header from './Header'

const HamI = (propsI) => {
    return (
        <div class={`iconI nav-icon-5I ${propsI.clickedI ? 'open' : ''}`} onClick={propsI.handleClickI}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HamI
