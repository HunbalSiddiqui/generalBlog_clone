import React from 'react'
import './Home.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
import SearchAndFilters from '../../Components/SearchAndFilters/SearchAndFilters'
import BlogsList from '../../Components/BlogsList/BlogsList'
function Home() {
    return (
        <div className="home_wrapper">
            <div className="home_cont">
                <div className="home_nav_area">
                    <HomeNav/>
                </div>
                <div className="search_filters">
                    <SearchAndFilters/>
                </div>
                <div className="home_blogs_area">
                    <BlogsList/>
                </div>
            </div>
        </div>
    )
}

export default Home
