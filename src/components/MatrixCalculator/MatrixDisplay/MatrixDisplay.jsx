import React from 'react';
import 'katex/dist/katex.css';
import style from './MatrixDisplay.module.css';

export default function MatrixDisplay({ matrix }) {
	let rows = matrix.rows.map((row) =>
		row.map((e, i) => {
			if (e.den < 0) {
				e.den = Math.abs(e.den);
				e.num *= -1;
			}
			return e.den !== 1 ? <td key={i}>{`${e.num}/${e.den}`}</td> : <td key={i}>{e.num}</td>;
		})
	);

	const table = rows.map((row, i) => {
		return <tr key={i}>{row}</tr>;
	});

	const pYScaling = rows.length > 1 ? rows.length + 3: 1;
	const parenthesisStyle = {
		transform: `matrix(1.${pYScaling},0,0,${pYScaling},0,-10)`,
		margin: '0px 10px',
	}

	return (
		<div className={style.display}>
			<h1 style={parenthesisStyle}>(</h1>
			<table>
				<tbody>{table}</tbody>
			</table>
			<h1 style={parenthesisStyle}>)</h1>
		</div>
	);
}
