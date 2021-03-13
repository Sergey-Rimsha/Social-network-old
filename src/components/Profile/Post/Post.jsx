import React from 'react';
import style from './Post.module.css';

const Post = () => {
    return (
        <div className={style.post}>
            <img src="" alt='post user photo'></img>
            <div className={style.postTxt}>Post_1</div>
        </div>
    )
}

export default Post;