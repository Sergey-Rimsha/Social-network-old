import React from 'react';
import style from './Post.module.css';

const Post = () => {
    let count = 0;
    console.log(count);
    return (
        <div className={style.post}>
            <img src="" alt='post user photo'></img>
            <div className={style.postTxt}>Post_1</div>
            <button onClick={() => {
                console.log(++count);
            }}>like</button>
        </div>
    )
}

export default Post;