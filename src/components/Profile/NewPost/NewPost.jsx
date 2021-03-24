import React from 'react';
import style from './NewPost.module.css';

const NewPost = (props) => {

    let newPostElem = React.createRef();

    let addPost = () => {
        let action = {type: 'NEW-POST'}
        props.dispatch(action);
    }

    let chengeText = () => {
        let text = newPostElem.current.value;
        let action = {
            type: 'CHENGE-POST',
            text: text
        }
        props.dispatch(action);
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

export default NewPost;