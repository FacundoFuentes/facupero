import { Matrix } from "./MatrixDisplay/MatrixDisplay";
import { FracMatrix } from "./algorithms/matrix";

const test_matrix = new FracMatrix([
	[1,0,0,0],
	[1,1,0,0],
  	[0,1,1,0],
  	[0,0,0,1]
]);

export default function MatrixCalculator() {
    return (
        <Matrix matrix={test_matrix}></Matrix>
    )
}