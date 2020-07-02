import React, {useEffect,useState} from 'react'
import './BlogsList.css'
import Blog from '../Blog/Blog'
import {connect} from 'react-redux'
import { ALL, TRAVEL, TECHNOLOGY, LIFESTYLE } from '../../Redux/userReducer/userConstants'
import { firestore } from '../../Firebase/Firebase'

function BlogsList(props) {

    var [fetchStatus,setFetchStatus] = useState(false)
    var [allBlogs,setallBlogs] = useState([])
    useEffect(()=>{
        setFetchStatus(false)
        fetchBlogs()
    },[])

    var fetchBlogs = async() => {
        var snap  = await firestore.collection('blogs').get();
        snap.forEach(element => {
            setallBlogs(allBlogs=>allBlogs.concat(element.data()))

        });
        setFetchStatus(true)
    }
    return (
        fetchStatus ?
        <div className="blogs_list">
            {
         //checking if props.searchVal is '' than display according to selected filter
            props.searchVal === '' ?
                allBlogs.map((task)=>{
                switch (props.filter) {
                        case ALL:
                         return(
                            <Blog key={task.uid} blog={task}/>
                            )
                            // break;
                        case TRAVEL:
                        if(task.category.toUpperCase()===TRAVEL)
                            {
                                return(
                                    <Blog key={task.uid} blog={task}/>
                                )
                            }
                            break;

                        case TECHNOLOGY:

                            if(task.category.toUpperCase()===TECHNOLOGY)
                                {
                                    return(
                                        <Blog key={task.uid} blog={task}/>
                                    )
                                }
                                break;

                        case LIFESTYLE:
                            if(task.category.toUpperCase()===LIFESTYLE)
                            {
                                return(
                                    <Blog key={task.uid} blog={task}/>
                                )
                            }
                            break;

                        default:
                            return null
                            
                    }
                    return null
                })
                :
                allBlogs.map((task)=>{
                    if(task.title.toLowerCase().includes(props.searchVal.toLowerCase()))
                    {
                     return (  <Blog key={task.uid} blog={task}/>)
                    }
                    else{
                        return null
                    }
                })            
            }
        </div>//div end
        :
        <h1>loading</h1>
    )
}

var mapStateToProps = (state) =>{
    return {
        filter : state.userReducer.filter,
        searchVal : state.userReducer.searchVal
    }
}

export default connect(mapStateToProps)(BlogsList)
