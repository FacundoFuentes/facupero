import React from 'react';
import Latex from 'react-latex-next';
import 'katex/dist/katex.css';

export function Matrix({ matrix }) {
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

	const test = 'We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.'
	return (
		<Latex>{test}</Latex>
	);
}
