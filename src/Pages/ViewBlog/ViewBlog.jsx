import React from 'react'
import './ViewBlog.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
import BlogShare from '../../Components/BlogShare/BlogShare'

function ViewBlog() {
    return (
        <div className="viewblog_wrapper">
            <div className="viewblog_cont">
                <div className="viewblog_navarea">
                    <HomeNav/>
                </div>
                <div className="viewblog_header">
                    <BlogShare/>
                </div>
            </div>
        </div>
    )
}

export default ViewBlog
