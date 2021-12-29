import { FracMatrix } from "../../components/MatrixCalculator/algorithms/matrix";

const initialState = {
    matrix_calculator: {
        formMatrices: {},
        displayMatrix: [],
    }
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_FORM_MATRICES':
            return {
                ...state,
                matrix_calculator: {
                    formMatrices: { ...state.matrix_calculator.formMatrices, [action.id]: action.payload}
                }
            }
        default:
            return state;
    }
}