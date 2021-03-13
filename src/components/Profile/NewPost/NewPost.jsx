import React from 'react';
import style from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={style.newPost}>
            <div>My Posts</div>
            <div>
                <input type="text"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
    )
}

export default NewPost;