import React from 'react'
import './BlogsList.css'
import Blog from '../Blog/Blog'
import { travelBlogs } from '../../Util/Data'

function BlogsList() {
    return (
        <div className="blogs_list">
            {
                travelBlogs.map((task)=>{
                    return(
                        <Blog key={task.uid} blog={task}/>
                    )
                })                
            }
        </div>
    )
}

export default BlogsList
