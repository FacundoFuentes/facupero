import React from 'react';
import Latex from 'react-latex-next';
import 'katex/dist/katex.css';
import MatrixStyle from '../MatrixStyle.module.css';

export function MatrixDisplay({ matrix }) {
	let rows = matrix.rows
		.map((row) => row.map((e) => {
						if (e.den < 0) {
							e.den = Math.abs(e.den);
							e.num *= -1
						}
						return e.den !== 1 ? String.raw`{${e.num}}/{${e.den}}` : `${e.num}`;
					})
					.toString()
					.replaceAll(',', ' & ') + '\\\\'
		)
		.toString()
		.replaceAll(',', '');

	const latex_matrix = `$\\begin{pmatrix} ${rows} \\end{pmatrix}$`
	return (
		<div className={MatrixStyle.container}>
			<Latex>{latex_matrix}</Latex>
		</div>
	);
}
