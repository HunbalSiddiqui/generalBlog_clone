import React from 'react'
import './HomeNav.css'
import {withRouter} from 'react-router-dom'
function HomeNav(props) {
    return (
        <div className="homeNav_wrapper">
            <div className="tagName flex"><h1 className="heading3 white bolder pointer"
            onClick={()=>{props.history.push('/')}}>MHS-BLOGS</h1></div>

            <div className="subscription flex-col">
                <h1 className="heading3 white lighter">Subscribe for newsletter</h1>
            <form>
                <input className="para1" type="email" name="" id="subscribtion_email" placeholder="Email" required/>
                <button className="para1 whiteBack pointer subscibeBtn"><i className="far fa-paper-plane"></i></button>
            </form>
            </div>

            <div className="nav_footer flex">
                <h1 className="para4 white">COPYRIGHT © 2020 Muhammad Hunbal Siddiqui - ALL RIGHTS RESERVED</h1>
            </div>

        </div>
    )
}

export default withRouter(HomeNav)
