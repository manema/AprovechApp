import { WELCOME } from 'actions/actionTypes';

const initialState =  {
    data: [],
    isFeching: false,
    error: false
}

export default dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case WELCOME:
            return {
                ...state,
                data: ['hola mundo'],
                isFeching: true
            }
        default:
        return state
    }
}