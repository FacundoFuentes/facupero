import { FracMatrix } from "../../components/MatrixCalculator/algorithms/matrix";

const initialState = {
    matrix_calculator: {
        forms: {},
        display: [],
    }
}

export default function rootReducer(state = initialState, action) {
    switch (action.from) {
        case 'MATRIX':
            switch (action.type) {
                case 'UPDATE_FORMS':
                    return {
                        ...state,
                        matrix_calculator: {
                            ...state.matrix_calculator,
                            forms: { ...state.matrix_calculator.forms, [action.id]: action.payload}
                        }
                    }
                case 'ADD':
                    return {
                        ...state,
                        matrix_calculator: {
                            ...state.matrix_calculator,
                            display: FracMatrix.add(state.matrix_calculator.forms[0], state.matrix_calculator.forms[1])
                        }
                    }
                case 'SUBSTRACT':
                    return {
                        ...state,
                        matrix_calculator: {
                            ...state.matrix_calculator,
                            display: FracMatrix.substract(state.matrix_calculator.forms[0], state.matrix_calculator.forms[1])
                        }
                    }
                case 'MULTIPLY':
                    return {
                        ...state,
                        matrix_calculator: {
                            ...state.matrix_calculator,
                            display: FracMatrix.product(state.matrix_calculator.forms[0], state.matrix_calculator.forms[1])
                        }
                    }
                case 'SWAP': {
                    let obj = {};
                    for (let i in state.matrix_calculator.forms){
                        let rev = Object.values(state.matrix_calculator.forms).reverse();
                        obj[i] = rev[i];
                    }
                    return {
                        ...state,
                        matrix_calculator: {
                            ...state.matrix_calculator,
                            forms: obj,
                        }
                    }
                }
                default:
                    return state;
            }
            
        default:
            return state;
    }
}