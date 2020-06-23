import React from 'react'
import './SearchAndFilters.css'
import {connect} from 'react-redux'
import { applyFilter } from '../../Redux/userReducer/userActions'
import { ALL, TRAVEL, TECHNOLOGY, LIFESTYLE } from '../../Redux/userReducer/userConstants'
function SearchAndFilters(props) {

    var changeFilterFn = (filter) =>{
        var filterObj = {
            filter
        }
        props.applyFilter(filter)
    }

    return (
        <div className="search_filter_wrapper flex-col">
            <div className="blogsearch flex">
                <form>
                    <input type="search" name="" id="" className="para1" placeholder="Search..."/>
                    <button className="para1 whiteBack blogsearchBtn"><i className="fab fa-searchengin"></i></button>
                </form>
            </div>

            <div className="filters flex">
                <h1 className="filter para2 flex lighter pointer bolder"
                onClick={()=>{changeFilterFn(ALL)}}>All</h1>
                {/* <h1 className="filter para2 flex lighter pointer">Technology</h1>1 */}
                <h1 className="filter para2 flex lighter pointer"
                onClick={()=>{changeFilterFn(TRAVEL)}}>Travel</h1>
                <h1 className="filter para2 flex lighter pointer"
                onClick={()=>{changeFilterFn(TECHNOLOGY)}}>Technology</h1>
                <h1 className="filter para2 flex lighter pointer"
                onClick={()=>{changeFilterFn(LIFESTYLE)}}>LifeStyle</h1>
            </div>
        </div>
    )
}

var actions = {
    applyFilter : applyFilter
}

export default connect(null,actions)(SearchAndFilters)
