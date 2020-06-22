import React from 'react'
import './SearchAndFilters.css'
function SearchAndFilters() {
    return (
        <div className="search_filter_wrapper flex-col">
            <div className="blogsearch flex">
                <form>
                    <input type="search" name="" id="" className="para1" placeholder="Search..."/>
                    <button className="para1 whiteBack blogsearchBtn"><i class="fab fa-searchengin"></i></button>
                </form>
            </div>

            <div className="filters flex">
                <h1 className="filter para2 flex lighter pointer bolder">All</h1>
                <h1 className="filter para2 flex lighter pointer">Technology</h1>
                <h1 className="filter para2 flex lighter pointer">Travel</h1>
                <h1 className="filter para2 flex lighter pointer">Technology</h1>
                <h1 className="filter para2 flex lighter pointer">Food</h1>
            </div>
        </div>
    )
}

export default SearchAndFilters
