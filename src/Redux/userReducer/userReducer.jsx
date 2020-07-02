import { ALL, CHANGE_FILTER, SEARCH_VALUE, VIEW_BLOG } from "./userConstants"

var initialState = {
    filter : ALL,
    searchVal : '',
    blogObj : null
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
        case VIEW_BLOG:
            return{
                ...state,
                blogObj : payload
            }
        default:
            return state
    }
}

export default userReducer