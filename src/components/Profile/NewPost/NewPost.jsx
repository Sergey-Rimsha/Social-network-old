import React from 'react';
import style from './NewPost.module.css';
import {addPostActionCreator, chengeTextActionCreator} from '../../../redux/profileReducer';

const NewPost = (props) => {

    let newPostElem = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let chengeText = () => {
        let text = newPostElem.current.value;
        props.dispatch(chengeTextActionCreator(text));
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