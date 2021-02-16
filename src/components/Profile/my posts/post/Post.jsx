import React from 'react';
import s from './post.module.css'
const Post = (props) => {
        return(
        <div className={s.item}>
            <img src='https://spiritofrock.ru/wp-content/uploads/2020/07/Behemoth-Knotfest-MattStasi-4248.jpg'></img>
           {props.message}
            <div>
              <span>like</span>
            </div>
        </div>
        
       
        
        )
}
  export default Post 