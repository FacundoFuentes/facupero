import React from 'react';
import { Link } from 'react-router-dom';
import landing from './Landing.module.css';

export default function Landing() {
    return (
        <div className={landing.main}>
            <h2>Welcome</h2>
            <h1>Facupero</h1>
            <Link to="/home">Explore</Link>
        </div>
    )
}