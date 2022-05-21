import React from "react";
import style from "./Card.module.css";
import Button from './Button.js';

function Card({info, title, img, clas}) {
    const cardClas = clas
    const clases =  `${style.card} ${style[cardClas]}` ;
    
    return (
    <div className={clases}>
        <img src={img} alt={title} className={style.img} />
        <h1 className={style.title}> {title} </h1>
        <p className={style.text}> {info} </p>
        <Button buttonClas={clas}/>
    </div>
    )
}

export default Card;
