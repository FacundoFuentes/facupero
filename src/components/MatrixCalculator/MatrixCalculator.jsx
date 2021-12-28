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
	return (
		<div className={style.container}>
        	<MatrixDisplay matrix={test_matrix}></MatrixDisplay>
        	<MatrixDisplay matrix={test_matrix}></MatrixDisplay>
        	<MatrixDisplay matrix={test_matrix}></MatrixDisplay>
		</div>
    )
}