import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MatrixDisplay from './MatrixDisplay/MatrixDisplay';
import MatrixForm from './MatrixForm/MatrixForm';
import { FracMatrix } from './algorithms/matrix';
import style from './MatrixCalculator.module.css';

export default function MatrixCalculator() {
	let default_size = 3;
	const [state, setState] = useState({
		forms: [
			<MatrixForm id={0} key={0} size={{ rows: default_size, cols: default_size }} />,
			<MatrixForm id={1} key={1} size={{ rows: default_size, cols: default_size }} />
		],
	});
	const dispatch = useDispatch();

	function add() {
		dispatch({ from: 'MATRIX', type: 'ADD' });
	}

	function substract() {
		dispatch({ from: 'MATRIX', type: 'SUBSTRACT' });
	}

	function multiply() {
		dispatch({ from: 'MATRIX', type: 'MULTIPLY' });
	}

	function swap() {
		dispatch({ from: 'MATRIX', type: 'SWAP' });
		setState({
			...state,
			forms: state.forms.reverse()
		});
	}

	return (
		<div className={style.container}>
			<div className={style.form}>
				{state.forms[0]}
				<div className={style.buttons}>
					<button onClick={add}>&#43;</button>
					<button onClick={substract}>&#8722;</button>
					<button onClick={multiply}>&times;</button>
					<button onClick={swap}>&#8644;</button>
				</div>
				{state.forms[1]}
			</div>
			<MatrixDisplay/>
		</div>
	);
}
