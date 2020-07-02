import { CHANGE_FILTER, SEARCH_VALUE, VIEW_BLOG } from "./userConstants"


export var applyFilter = (filter) => {
    return async(Dispatch)=>{
        Dispatch({
            type :CHANGE_FILTER,
            payload : filter
        })
    }
}

export var searching = (val) =>{
    return async(Dispatch)=>{
        Dispatch({
            type :SEARCH_VALUE,
            payload : val
        })
    }
}


export var viewBlog = (blogObj) => {
    return async(Dispatch)=>{
        Dispatch({
            type:VIEW_BLOG,
            payload : blogObj,
        })
    }
}