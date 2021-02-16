import React from 'react';
import s from './myposts.module.css'
import Post from './post/Post.jsx'


const Myposts = () => {

return (
    <div className={s.content}>
        my posts
        <div>
            <textarea></textarea>
            <button>add post</button>
            <button>remove post</button>
        </div>
        <Post message='hello, how are you' likesCount='0'/>
        <Post message='its my first post' likesCount='25'/>
        </div>
        
   )}

  export default Myposts