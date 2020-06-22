import React from 'react'
import './Blog.css'
import img1 from './imgs/image_1.jpg'
function Blog() {
    return (
        <div className="blog">
            <div className="blog_img flex">
                <img className="blog_img_size" src={img1} alt="" srcset=""/>
            </div>

            <div className="blog_content flex-col">
                <h1 className="heading4 bolder">A Loving Heart is the Truest Wisdom</h1>
                <div className="details flex">
                    <p className="para4 flex lighter util"><i class="far fa-calendar-alt"></i> June 20, 2020</p>
                    <p className="para4 flex lighter util"><i class="far fa-folder"></i>Travel</p>
                    <p className="para4 flex lighter util"><i class="far fa-comment"></i> Comments</p>
                </div>
                <h1 className="para2 lighter">A small river named Duden flows by their place and supplies it with the necessary regelialia.</h1>
                <button className="para2 readmoreBtn lighter pointer">ReadMore <i class="fas fa-chevron-right"></i></button>
            </div>

        </div>
    )
}

export default Blog
