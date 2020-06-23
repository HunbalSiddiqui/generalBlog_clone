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
                AllBlogs.map((task)=>{
                    switch (props.filter) {
                        case ALL:
                         return(
                            <Blog key={task.uid} blog={task}/>
                            )
                            break;
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
                            break;
                    }
                    
                })                
            }
        </div>
    )
}

var mapStateToProps = (state) =>{
    return {
        filter : state.userReducer.filter
    }
}

export default connect(mapStateToProps)(BlogsList)
