import React from 'react'
import './ViewBlog.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
function ViewBlog() {
    return (
        <div className="viewblog_wrapper">
            <div className="viewblog_cont">
                <div className="viewblog_navarea">
                    <HomeNav/>
                </div>
                <div className="viewblog_header"></div>
            </div>
        </div>
    )
}

export default ViewBlog
