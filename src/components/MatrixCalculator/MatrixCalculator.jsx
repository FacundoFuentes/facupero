import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MatrixForm from './MatrixForm/MatrixForm';
import Result from './Result/Result';
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
	const last_action = useSelector(store => store.matrix_calculator.last_action);

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
		dispatch({ from: "MATRIX", type: last_action.type });
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
			<Result/>
		</div>
	);
}
