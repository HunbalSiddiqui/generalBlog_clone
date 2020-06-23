import { CHANGE_FILTER } from "./userConstants"


export var applyFilter = (filter) => {
    return async(Dispatch)=>{
        Dispatch({
            type :CHANGE_FILTER,
            payload : filter
        })
    }
}