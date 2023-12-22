import React, { useState } from 'react';
import './style.css';
const MemoryCame = () => {
    const [boxes, setBoxes] = useState(Array(16).fill(''))
  return (
    <div className='container'>
        <div className='main'>
            {boxes.map(
             box =>   <div className='box'></div>
            )}
        </div>
    </div>
  )
}

export default MemoryCame