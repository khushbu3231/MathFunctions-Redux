export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDITION = "ADDITION";
export const SUBTRACTION = "SUBTRACTION";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = () => {
    return {
        type: ADDITION,
        value: 5
    }
}

export const subtract = () => {
    return {
        type: SUBTRACTION,
        value: 5
    }
}

export const saveResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    }
}

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000);
    }
};
export const deleteResult = (index) => {
    return {
        type: DELETE_RESULT,
        value: index
    }
}