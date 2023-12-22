import React, { useState } from 'react';
import avengersImage from '../image/avengers.jpg'
import ironmanImg from '../image/ironman.jpg'
import spidermanImg from '../image/spider-man.jpg';
import thorImg from '../image/thor_love_and_thunder_dc.jpg';
import Movio from '../Movio';
import './style.css';
const Movios = () => {
    const Movio = [
        {
            image: avengersImage,
            name: 'The Avengers',
            description: 'Superheroes team up to save the world.',
        },
        {
            image: spidermanImg,
            name: 'Spider-Man: Into the Spider-Verse',
            description: 'An animated adventure with multiple Spider-People.',
        },
        {
            image: ironmanImg,
            name: 'Iron man 3',
            description: 'Iron Man 3 is a 2013 American superhero film based on the Marvel Comics character Iron Man',
        },
        {
            image: thorImg,
            name: 'Thor: Love and Thunder',
            description: 'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.',
        },
    ];
    const [text, setText] = useState("")
    const onSearch = (e) => {
        const text = e.target.value;
        setText(text)
    }
    const list = movios.filter(movio => movio.name.toLowerCase().includes(text.toLocaleLowerCase()))
    console.log(list, text);
    return (
        <div className="App">
            <h1>Таньд санал болгох киноны жагсаалт</h1>
            <p>Адал явдалт, тулаант</p>
            <input type="text" onChange={onSearch} placeholder='Хайлт' />

            <div className="movie-list">
                {list.map(movie => (
                    <Movio
                        image={movio.image}
                        name={movio.name}
                        description={movio.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Movios;