import { useSelector } from "react-redux";
import Matrix from "../Matrix/Matrix";
import style from "./Result.module.css"

export default function Result() {
    const mc = useSelector(store => store.matrix_calculator);
    
    let matrix = (matrix) => <Matrix matrix={matrix}/>
    const result = (action) => {
        if (action.type === 'ADD' || action.type === 'SUBSTRACT' || action.type === 'MULTIPLY') {
            return <div className={style.result}>
                {matrix(mc.forms[0])}
                {
                    action.type === 'ADD' ? <h1>&#43;</h1> :
                    action.type === 'SUBSTRACT' ? <h1>&#8722;</h1> : <h1>&times;</h1>
                }
                {matrix(mc.forms[1])}
                <h1>&#61;</h1>
                {matrix(mc.result)}
            </div>
        }
        if (action.type === 'INVERSE') {
            return <div className={style.inverse}>
                {matrix(mc.forms[action.id])}
                <h2>-1</h2>
                <h1>=</h1>
                {matrix(mc.result)}
            </div>
        }
        if (action.type === 'SWAP') {
            
        }
        return <span></span>
    }

    return(mc.last_action ? result(mc.last_action) : <span></span>)
}