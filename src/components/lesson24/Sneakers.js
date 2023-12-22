import React from 'react'
import "./style.css"
import LikeButton from './Like'
const Sneaker = ({ name, imageUrl, desc }) => {
    return (
        <div className='huree'>
            <img src={imageUrl} alt='' />
            <h1>{name}</h1>
            <p>{desc}</p>
            <LikeButton />
        </div>
    )
}

export default Sneaker