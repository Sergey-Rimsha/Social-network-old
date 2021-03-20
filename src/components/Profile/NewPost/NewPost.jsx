import React from 'react';
import style from './NewPost.module.css';

const NewPost = (props) => {

    let newPostElem = React.createRef();

    let addPost = () => {
        props.newPost();
    }

    let inputText = () => {
        let text = newPostElem.current.value;
        props.newStateText(text);
    }

    return (
        <div className={style.newPost}>
            <div>My Posts</div>
            <div>
                <input  onChange = {inputText} ref = {newPostElem} value = {props.inputText} type="text"/>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    )
}

export default NewPost;