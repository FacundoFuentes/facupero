import React from 'react'
import style from './SteamCalculator.module.css'
import SteamLogo from '../../media/icons/steam_logo.png'

const SteamCalculator = () => {
    return (
        <div className={style.steamCalculatorContainer}>
            <div className={style.steamCalculator}>
                <h1>STEAM</h1>
                <h1>CALCULATOR.</h1>
                <button>START USING IT</button>
            </div>
            <div className={style.steamCalculatorLogo}>
                <img src={SteamLogo} alt="steam logo"/>
            </div>
        </div>
    )
}

export default SteamCalculator
