import React from "react";
import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({name,desc,img}) {
    return (
        <div className={style.Card}>
            <div className={style.Info}>
                <h1>{name}</h1>
                <p>{desc}</p>
                <Link to={'/' + name.replace(/ /g,'-').toLowerCase()}>Go</Link>
            </div>
            <img src={img} alt='app'></img>
        </div>
    )
}