import {
    INPUT_NUMBER,
    PLUS,
    MINUS,
    MULTIPLY,
    DIVIDE,
    EQUAL,
    CLEAR,
} from "../actions/types";

const initialAppStore = {
    inputValue: 0,
    operator: "",
    resultValue: 0,
    isCalculate: false,
    isShowingResult: false,
};

const calculator = (state = initialAppStore, action) => {
    // console.log("action.type="+action.type);
    switch(action.type) {
        case INPUT_NUMBER:
            return {
                ...state,
                inputValue: state.inputValue * 10 + action.number,
                isShowingResult: false,
            };
        
        case PLUS:
            if (state.isCalculate === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operator: "+",
                    resultValue: state.resultValue + state.inputValue,
                    isShowingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operator: "+",
                    isCalculate: true,
                    resultValue: state.inputValue,
                    isShowingResult: true,
                };
            }

        case MINUS:
            if (state.isCalculate === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operator: "-",
                    resultValue: state.resultValue - state.inputValue,
                    isShowingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operator: "-",
                    isCalculate: true,
                    resultValue: state.inputValue,
                    isShowingResult: true,
                };
            }

        case MULTIPLY:
            if (state.isCalculate === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operator: "*",
                    resultValue: state.resultValue * state.inputValue,
                    isShowingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operator: "*",
                    isCalculate: true,
                    resultValue: state.inputValue,
                    isShowingResult: true,
                };
            }
    
        case DIVIDE:
            if (state.isCalculate === true) {
                return {
                    ...state,
                    inputValue: 0,
                    operator: "/",
                    resultValue: state.resultValue / state.inputValue,
                    isShowingResult: true,
                };
            } else {
                return {
                    ...state,
                    inputValue: 0,
                    operator: "/",
                    isCalculate: true,
                    resultValue: state.inputValue,
                    isShowingResult: true,
                };
            }
        
        case CLEAR:
            return {
                inputValue: 0,
                operator: "",
                resultValue: 0,
                isCalculate: false,
                isShowingResult: false,
            };
        
        case EQUAL:
            switch (state.operator) {
                case "+":
                    return {
                        inputValue: state.resultValue + state.inputValue,
                        operator: "",
                        resultValue: state.resultValue + state.inputValue,
                        isCalculate: false,
                        isShowingResult: true
                    };
                case "-":
                    return {
                        inputValue: state.resultValue - state.inputValue,
                        operator: "",
                        resultValue: state.resultValue - state.inputValue,
                        isCalculate: false,
                        isShowingResult: true
                    };
                case "*":
                    return {
                        inputValue: state.resultValue * state.inputValue,
                        operator: "",
                        resultValue: state.resultValue * state.inputValue,
                        isCalculate: false,
                        isShowingResult: true
                    };
                case "/":
                    return {
                        inputValue: state.resultValue / state.inputValue,
                        operator: "",
                        resultValue: state.resultValue / state.inputValue,
                        isCalculate: false,
                        isShowingResult: true
                    };
                default :
                    return state;
            }
        default:
                return state;
    }
}

export default calculator;