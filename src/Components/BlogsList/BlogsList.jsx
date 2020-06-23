import React from 'react'
import './BlogsList.css'
import Blog from '../Blog/Blog'
import {connect} from 'react-redux'
import { AllBlogs } from '../../Util/Data'
import { ALL, TRAVEL, TECHNOLOGY, LIFESTYLE } from '../../Redux/userReducer/userConstants'

function BlogsList(props) {
    return (
        <div className="blogs_list">
            {
            //checking if props.searchVal is '' than display according to selected filter
            props.searchVal === '' ?
                AllBlogs.map((task)=>{
                    switch (props.filter) {
                        case ALL:
                         return(
                            <Blog key={task.uid} blog={task}/>
                            )
                            // break;
                        case TRAVEL:

                        if(task.category===TRAVEL)
                            {
                                return(
                                    <Blog key={task.uid} blog={task}/>
                                )
                            }
                            break;

                        case TECHNOLOGY:

                            if(task.category===TECHNOLOGY)
                                {
                                    return(
                                        <Blog key={task.uid} blog={task}/>
                                    )
                                }
                                break;

                        case LIFESTYLE:
                            if(task.category===LIFESTYLE)
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
                AllBlogs.map((task)=>{
                    if(task.title.toLowerCase().includes(props.searchVal.toLowerCase()))
                    {
                     return (  <Blog key={task.uid} blog={task}/>)
                    }
                    else{
                        return null
                    }
                })            
            }


        </div>
    )
}

var mapStateToProps = (state) =>{
    return {
        filter : state.userReducer.filter,
        searchVal : state.userReducer.searchVal
    }
}

export default connect(mapStateToProps)(BlogsList)
