import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FracMatrix } from '../algorithms/matrix';
import MatrixParenthesis from '../MatrixParenthesis';
import style from './MatrixForm.module.css';

export default function MatrixForm({ size, id }) {
	const [matrix, setMatrix] = useState(
        new FracMatrix([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ])
	);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        if (e.target.value) {
            const
                col_i = parseInt(e.target.attributes.col.value),
                row_i = parseInt(e.target.attributes.row.value),
                val = parseFloat(e.target.value);
            setMatrix(
                new FracMatrix(matrix.rows.map((row,i) => {
                    if (i === row_i) {
                        return row.map((e, i) => {
                            if (i === col_i) return val;
                            else return e;
                        })
                    } else {
                        return row;
                    }
                }))
            );
        }
    }

    useEffect(() => {
        dispatch({ from: 'MATRIX', type: 'UPDATE_FORMS', payload: matrix, id:id });
    }, [dispatch, matrix, id])
    
    var formMatrix = matrix.rows.map((row, i) => {
            let new_row = [];
            for (var j = 0; j < size.cols; j++) {
                new_row.push(
                    <td key={j}>
                        <input
                            key={parseInt(id) + j + i}
                            col={j}
                            row={i}
                            type="number"
                            step="0.01"
                            defaultValue={0}
                            onChange={(e) => handleChange(e)}>    
                        </input>
                    </td>
                )
            }
            return new_row;
        }).map((row,i) => <tr key={parseInt(id) + i}>{row}</tr>);

    return (
        <MatrixParenthesis>
            <div className={style.matrixForm}>
                <form>
                    <table>
                        <tbody>{formMatrix}</tbody>
                    </table>
                </form>
            </div>
        </MatrixParenthesis>
	);
}
