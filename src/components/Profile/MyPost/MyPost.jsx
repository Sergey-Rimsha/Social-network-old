import React from 'react';
import style from './NewPost.module.css';

const MyPost = (props) => {

    let newPostElem = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let chengeText = () => {
        let text = newPostElem.current.value;
        props.chengeText(text);
    }

    return (
        <div className={style.newPost}>
            <div>My Posts</div>
            <div>
                <input  onChange = {chengeText} ref = {newPostElem} value = {props.chengePostText} type="text"/>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    )
}

export default MyPost;