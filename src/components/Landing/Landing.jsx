import React from 'react';
import { Link } from 'react-router-dom';
import landing from './Landing.module.css';
import logo from './LogoFacupero.svg';

export default function Landing() {
    return (
        <div className={landing.main}>
            <img src={logo} alt='logo'></img>
            <div className={landing.welcome}>
                <h2>Welcome</h2>
                <h1>Facupero</h1>
                <Link to="/home">Explore</Link>
            </div>
        </div>
    )
}