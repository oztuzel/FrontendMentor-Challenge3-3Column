import React from 'react'
import style from './Button.module.css';

function Button({buttonClas}) {
    const clas = `${style.button} ${style[buttonClas]}` ;
    
    return (
        
        <button className={clas}>Learn More</button>
    )
}

export default Button