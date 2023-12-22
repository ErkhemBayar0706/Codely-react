import React, { useState } from 'react'
import './style.css'
const TicTac = () => {
    const [boxes, setBoxes] = useState(['', '', '', '', '', '', '', '', ''])
    const [lastClick, setLastClick] = useState("")
    const [winner, setWinner] = useState('')
    // Ялагч тодорсон уу шалгах?
    const checkWinner = (lastBoxes) => {
        console.log(lastBoxes);
        // Хэвтээ дараалсан 3 ?
        // 0,1,2
        // 3,4,5
        // 6,7,8
        if (lastBoxes[0] === lastBoxes[1] && lastBoxes[0] === lastBoxes[2]) {
            console.log('Winner=' + lastBoxes[0]);
            setWinner(lastBoxes[0])
        }
        // Босоо дараалсан 3 ?
        // 0,3,6
        // 1,4,7
        // 2,5,8

        // Диаганол дараалсан 3 ?
        // 0 4 8
        // 2 4 6 
    }
    const handleClick = (i) => {
        // Тухайн дарсан товчний утга хоосон биш бол дарж болохгүй
        if (boxes[i] === '') {
            // Дараагийн утгаа тодорхойлж
            let next = lastClick === 'X' ? 'O' : 'X';
            boxes[i] = next
            // Сүүлийн дарсан товчний утгийг хадгалж байна
            setLastClick(next)
            // Хайрцагнуудын утгийг шинэчилж байна
            setBoxes([...boxes])
            checkWinner(boxes)
        }
    }
    return (
        <div className='container'>
            {winner !== '' ? <h1 className='winner'>Ялагч бол: {winner}</h1> : null}
            <div className='tic-tac'>

                {/* i бол давталтын дугаар */}
                {boxes.map((box, i) =>
                    <div className="box" onClick={() => handleClick(i)} >
                        {box}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TicTac