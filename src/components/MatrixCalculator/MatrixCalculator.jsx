import { MatrixDisplay } from "./MatrixDisplay/MatrixDisplay";
import { MatrixForm } from "./MatrixForm/MatrixForm"
import { FracMatrix } from "./algorithms/matrix";

const test_matrix = new FracMatrix([
	[1,0,0,0],
	[1,1,0,0],
  	[0,1,1,0],
  	[0,0,0,1]
]);

export default function MatrixCalculator() {
    return (
        <MatrixDisplay matrix={test_matrix}></MatrixDisplay>
    )
}