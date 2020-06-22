import React from 'react'
import './Home.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
function Home() {
    return (
        <div className="home_wrapper">
            <div className="home_cont">
                <div className="home_nav_area">
                    <HomeNav/>
                </div>
                <div className="search_filters"></div>
                <div className="home_blogs_area"></div>
            </div>
        </div>
    )
}

export default Home
