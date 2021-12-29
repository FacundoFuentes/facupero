import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MatrixParenthesis from '../MatrixParenthesis';
import style from './MatrixForm.module.css';

export default function MatrixForm({ size, id }) {
	const [matrix, setMatrix] = useState(
		new Array(size.rows).fill(new Array(size.cols).fill(0)),
	);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const
            col_i = parseInt(e.target.attributes.col.value),
            row_i = parseInt(e.target.attributes.row.value),
            val = parseInt(e.target.value);
        setMatrix(
            matrix.map((row,i) => {
                if (i === row_i) {
                    return row.map((e, i) => {
                        if (i === col_i) return val;
                        else return e;
                    })
                } else {
                    return row;
                }
            })
        );
    }

    useEffect(() => {
        dispatch({ type: 'UPDATE_FORM_MATRICES', payload: matrix, id:id });
    },[dispatch,matrix,id])

	const formMatrix = matrix
        .map((row, i) => {
            let new_row = [];
            for (var j = 0; j < size.cols; j++) {
                new_row.push(
                    <td key={j}>
                        <input
                            key={j}
                            col={j}
                            row={i}
                            type="number"
                            defaultValue={matrix[i][j]}
                            onChange={(e) => handleChange(e)}>    
                        </input>
                    </td>
                )
            }
            return new_row;
        }
		)
		.map((row,i) => <tr key={i}>{row}</tr>);

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
