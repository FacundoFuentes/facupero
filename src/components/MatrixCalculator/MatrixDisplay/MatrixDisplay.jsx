import React from 'react';
import 'katex/dist/katex.css';
import MatrixParenthesis from '../MatrixParenthesis';
import style from './MatrixDisplay.module.css';
import { useSelector } from 'react-redux';
import { FracMatrix } from '../algorithms/matrix';

export default function MatrixDisplay() {
	const matrix = useSelector(store => store.matrix_calculator.display)
	let rows, table = null;
	if (matrix instanceof FracMatrix) {
		rows = matrix.rows.map((row) =>
			row.map((e, i) => {
				return e.den !== 1 ? <td key={i}>{`${e.num}/${e.den}`}</td> : <td key={i}>{e.num}</td>;
			})
		);
		table = rows.map((row, i) => {
			return <tr key={i}>{row}</tr>;
		});
	}
	
	return (
		<div className={style.display}>
			{table ? 
				<MatrixParenthesis>
					<table>
						<tbody>{table}</tbody>
					</table>
				</MatrixParenthesis>
				:
				<span></span>
			}

		</div>
	);
}
