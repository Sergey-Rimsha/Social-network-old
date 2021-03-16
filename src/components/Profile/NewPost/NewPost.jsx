import React from 'react';
import style from './NewPost.module.css';

const NewPost = (props) => {

    let newPostElem = React.createRef();

    let addPost = () => {
        let text = newPostElem.current.value;
        props.newPost(text);
    }


    return (
        <div className={style.newPost}>
            <div>My Posts</div>
            <div>
                <input ref= {newPostElem} type="text"/>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    )
}

export default NewPost;