import React, { Component } from 'react';



import Posts from './Posts/Posts';
import './Blog.css';

//import axios from 'axios';

import axiosInstance from '../../axios';

class Blog extends Component {

    




    

    render () {     
          
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/new-post'>NewPost</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;