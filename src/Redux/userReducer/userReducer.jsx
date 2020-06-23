import { ALL, CHANGE_FILTER, SEARCH_VALUE } from "./userConstants"

var initialState = {
    filter : ALL,
    searchVal : ''
}

var userReducer = (state=initialState,action) => {
    var {type,payload} = action
    switch (type) {
        case CHANGE_FILTER:
            return {
                ...state,
                filter : payload
            }
        case SEARCH_VALUE:
            return{
                ...state,
                searchVal : payload
            }
        default:
            return state
    }
}

export default userReducer