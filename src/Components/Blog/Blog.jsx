import React from 'react'
import './Blog.css'
import {connect} from 'react-redux'
import { viewBlog } from '../../Redux/userReducer/userActions'
import {withRouter} from 'react-router-dom'
function Blog(props) {
    var {title,content,category,img,uid} = props.blog

    var viewBlog = (id) => {
        props.viewBlog(id);
        props.history.push(`/viewBlog/${title}`)
    }

    return (
        <div className="blog_wrapper">
            <div className="blog_img flex">
                <img className="blog_img_size" src={img} alt=""/>
            </div>

            <div className="blog_content flex-col">
                <h1 className="heading4 bolder">{title}</h1>
                <div className="details flex">
                    <p className="para4 flex lighter util"><i className="far fa-calendar-alt"></i> June 20, 2020</p>
                    <p className="para4 flex lighter util"><i className="far fa-folder"></i>{category}</p>
                    <p className="para4 flex lighter util"><i className="far fa-comment"></i> Comments</p>
                </div>
                <h1 className="para2 lighter">{content}</h1>
                <button className="para2 readmoreBtn lighter pointer" id={uid}
                onClick={(e)=>{viewBlog(e.target.id)}}>ReadMore <i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

var actions = {
    viewBlog : viewBlog
}

export default connect(null,actions)(withRouter(Blog))
