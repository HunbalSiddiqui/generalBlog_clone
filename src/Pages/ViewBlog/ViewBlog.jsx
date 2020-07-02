import React,{useState,useEffect} from 'react'
import './ViewBlog.css'
import HomeNav from '../../Components/HomeNav/HomeNav'
import BlogShare from '../../Components/BlogShare/BlogShare'
import {connect} from 'react-redux'
import { firestore } from '../../Firebase/Firebase'
function ViewBlog(props) {
    var [title,setTitle] = useState(null)
    var [image,setimage] = useState(null)
    // var [content,setContent] = useState(null)
    var [category,setCategory] = useState(null)
    var [story,setStory] = useState(null)
    useEffect(()=>{
        if(props.blogObj)
        {
            fetchBlogDetails()
        }
        else{
            props.history.push('/');
        }
    },[props.blogId])

    var fetchBlogDetails =async () =>{
        //fetching
        // var snap = await firestore.collection('blogs').doc(props.blogId).get();
        // console.log(snap.data())
        // setTitle(snap.data().title);
        // setimage(snap.data().img);
        // setContent(snap.data().content);
        // setCategory(snap.data().category);
        // setStory(snap.data().story);
        setTitle(props.blogObj.title)
        setStory(props.blogObj.story)
        setimage(props.blogObj.Image)
    }

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
                    <div className="blog_image flex"><img className="image_setting" src={image} alt=""/></div>
                    <div className="story"><h1 className='para1 bolder'>{story}</h1></div>
                </div>

            </div>
        </div>
    )
}

var mapStateToProps = (state) =>{
    return{
        blogId : state.userReducer.blogId,
        blogObj : state.userReducer.blogObj
    }
}

export default connect(mapStateToProps)(ViewBlog)
