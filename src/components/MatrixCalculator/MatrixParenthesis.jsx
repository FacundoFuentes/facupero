import style from './MatrixParenthesis.module.css';

export default function MatrixParenthesis(props) {
    //const pYScaling = rows.length > 1 ? rows.length + 3: 1;
    const parenthesisStyle = {
        transform: `matrix(1.${4},0,0,${5},0,-10)`,
        margin: '0px 10px',
    };

    return (
        <div className={style.parenthesis}>
            <h1 style={parenthesisStyle}>(</h1>
                {props.children}
        	<h1 style={parenthesisStyle}>)</h1>
        </div>
    )
}