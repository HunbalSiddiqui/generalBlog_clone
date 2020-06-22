import React from 'react'
import './BlogsList.css'
import Blog from '../Blog/Blog'
function BlogsList() {
    return (
        <div className="blogs_list flex-col">
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
        </div>
    )
}

export default BlogsList
