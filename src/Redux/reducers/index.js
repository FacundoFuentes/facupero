import { FracMatrix } from "../../components/MatrixCalculator/algorithms/matrix";

const initialState = {
    matrix_calculator: {
        forms: {},
        result: [],
        last_action: null,
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
                            forms: { ...state.matrix_calculator.forms, [action.id]: action.payload },
                            last_action: action,
                        }
                    }
                case 'ADD':
                    return {
                        ...state,
                        matrix_calculator: {
                            ...state.matrix_calculator,
                            result: FracMatrix.add(state.matrix_calculator.forms[0], state.matrix_calculator.forms[1]),
                            last_action: action,
                        }
                    }
                case 'SUBSTRACT':
                    return {
                        ...state,
                        matrix_calculator: {
                            ...state.matrix_calculator,
                            result: FracMatrix.substract(state.matrix_calculator.forms[0], state.matrix_calculator.forms[1]),
                            last_action: action,
                        }
                    }
                case 'MULTIPLY':
                    return {
                        ...state,
                        matrix_calculator: {
                            ...state.matrix_calculator,
                            result: FracMatrix.product(state.matrix_calculator.forms[0], state.matrix_calculator.forms[1]),
                            last_action: action,
                        }
                    }
                case 'INVERSE':
                    let inverse;
                    try {
                        inverse = state.matrix_calculator.forms[action.id].inverse();
                    } catch (err) {
                        alert(err);
                    }
                    return {
                        ...state,
                        matrix_calculator:{
                            ...state.matrix_calculator,
                            result: inverse,
                            last_action: action,
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