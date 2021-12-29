import Style from './Home.module.css';
import Card from './Cards/Cards';

import SteamCalculator_icon from '../SteamCalculator/icon.png';
import MatrixCalculator_icon from '../MatrixCalculator/icon.png';

const SteamCalculator_desc = 'Input the game pricetag and get the taxed price.';
const MatrixCalculator_desc = 'Add, multiply, find the inverse and more.';

export default function Home() {
    return (
        <div id='Home' className={Style.Home}>
            <Card name='Steam Calculator' desc={SteamCalculator_desc} img={SteamCalculator_icon}></Card>
            <Card name='Matrix Calculator' desc={MatrixCalculator_desc} img={MatrixCalculator_icon}></Card>
        </div>
    )
}