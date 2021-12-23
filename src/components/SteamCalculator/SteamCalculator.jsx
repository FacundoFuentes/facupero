import React from 'react'
import style from './SteamCalculator.module.css'

const SteamCalculator = () => {
    return (
        <div className={style.steamCalculatorContainer}>
            <div className={style.steamCalculator}>
                <h1>STEAM</h1>
                <h1>CALCULATOR.</h1>
                <button>START</button>
            </div>
        </div>
    )
}

export default SteamCalculator
