import React from 'react';
import MatrixParenthesis from '../MatrixParenthesis';
import style from './Matrix.module.css';
import { FracMatrix } from '../algorithms/matrix';

export default function Matrix({matrix}) {
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
				<span>Non Inversible</span>
			}

		</div>
	);
}