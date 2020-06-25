import React,{useState,useEffect} from 'react'
import './ViewBlog.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
import BlogShare from '../../Components/BlogShare/BlogShare'
import {connect} from 'react-redux'
import { AllBlogs } from '../../Util/Data'
// import {Redirect} from 'react-router-dom'
function ViewBlog(props) {
    console.log(props.blogId)
    console.log(AllBlogs)

    var [title,setTitle] = useState(null)
    var [image,setimage] = useState(null)
    var [content,setContent] = useState(null)
    var [category,setCategory] = useState(null)

    useEffect(()=>{
        if(props.blogId)
        {
            //for each will be unoptimized for large bulk of blogs...as break cant be used in it
            AllBlogs.forEach(element => {
                if(element.uid===props.blogId)
                {
                    setTitle(element.title);
                    setimage(element.img);
                    setContent(element.content);
                    setCategory(element.category);
                }
            });   
        }
        else{
            props.history.push('/');
        }
    },[props.blogId])

    return (
        <div className="viewblog_wrapper">
            <div className="viewblog_cont">
                <div className="viewblog_navarea">
                    <HomeNav/>
                </div>
                <div className="viewblog_header">
                    <BlogShare/>
                </div>
                <div className="blog_view">
    <div className="title heading4"><h1 className='lighter'>{title}</h1></div>
    <div className="blog_image flex"><img className="image_setting" src={image} alt="" srcset=""/></div>
    <div className="story"><h1 className='para1 lighter'>{content}</h1></div>
                </div>

            </div>
        </div>
    )
}

var mapStateToProps = (state) =>{
    return{
        blogId : state.userReducer.blogId
    }
}

export default connect(mapStateToProps)(ViewBlog)
