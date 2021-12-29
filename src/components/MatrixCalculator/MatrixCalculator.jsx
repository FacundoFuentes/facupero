import React from 'react';
import { useDispatch } from 'react-redux';
import MatrixDisplay from "./MatrixDisplay/MatrixDisplay";
import MatrixForm from "./MatrixForm/MatrixForm";
import { FracMatrix } from "./algorithms/matrix";
import style from "./MatrixCalculator.module.css";

const test_matrix = new FracMatrix([
	[1.2,0,0,3.1],
	[1.5,1,0,0],
  	[0,1,1,0],
  	[0,0,0,1]
]);

export default function MatrixCalculator() {
	let counter = 1, default_size = 3;
	const dispatch = useDispatch()

	function add() {
		console.log('Adding.')
	}

	function substract() {
		console.log('Substracting.')
	}

	function multiply() {
		console.log('Multiplying.')
	}


	return (
		<div className={style.container}>
			<div className={style.form}>
				<MatrixForm id={counter++} size={{ rows: default_size, cols: default_size }} />
				<div className={style.buttons}>
					<button onClick={add}>&#43;</button>
					<button onClick={substract}>&#8722;</button>
					<button onClick={multiply}>&times;</button>
				</div>
				<MatrixForm id={counter++} size={{ rows: default_size, cols: default_size }} />
			</div>
			<h1>=</h1>
			<MatrixDisplay matrix={test_matrix}/>
		</div>
    )
}