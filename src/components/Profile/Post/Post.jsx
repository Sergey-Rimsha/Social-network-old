import React from 'react';
import style from './Post.module.css';
import userPhoto from './../../../assets/images/ava_default.jpg';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.imgWrap}>
                <img src={userPhoto} alt='post_user_photo'></img>
            </div>
            <div className={style.postTxt}>{props.post}</div>
            <div className={style.wrapBtn}>
                <button>like</button>
            </div>

        </div>
    )
}

export default Post;