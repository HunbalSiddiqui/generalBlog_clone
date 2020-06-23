import React from 'react'
import './SearchAndFilters.css'
import {connect} from 'react-redux'
import { applyFilter } from '../../Redux/userReducer/userActions'
import { ALL, TRAVEL, TECHNOLOGY, LIFESTYLE } from '../../Redux/userReducer/userConstants'
function SearchAndFilters(props) {

    var changeFilterFn = (filter,e) =>{
        props.applyFilter(filter)
        var tabs = document.querySelectorAll('.common');
        tabs.forEach(element => {
            element.classList.remove('bolder')
        });
        document.querySelector(`#${e.target.id}`).classList.add('bolder')
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
                <h1 className="filter para2 flex lighter pointer common" id="alltab"
                onClick={(e)=>{changeFilterFn(ALL,e)}}>All</h1>
                <h1 className="filter para2 flex lighter pointer common" id="techtab"
                onClick={(e)=>{changeFilterFn(TECHNOLOGY,e)}}>Technology</h1>
                <h1 className="filter para2 flex lighter pointer common" id="lstab"
                onClick={(e)=>{changeFilterFn(LIFESTYLE,e)}}>LifeStyle</h1>
                <h1 className="filter para2 flex lighter pointer common" id="traveltab"
                onClick={(e)=>{changeFilterFn(TRAVEL,e)}}>Travel</h1>
            </div>
        </div>
    )
}

var actions = {
    applyFilter : applyFilter
}

export default connect(null,actions)(SearchAndFilters)
