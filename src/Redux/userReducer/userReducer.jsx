import { ALL, CHANGE_FILTER } from "./userConstants"

var initialState = {
    filter : ALL
}

var userReducer = (state=initialState,action) => {
    var {type,payload} = action
    switch (type) {
        case CHANGE_FILTER:
            return {
                ...state,
                filter : payload
            }
        default:
            return state
    }
}

export default userReducer