import React from 'react';
import MyPost from './MyPost';

import {addPostActionCreator, chengeTextActionCreator} from '../../../redux/profileReducer';

const MyPostContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let chengeText = (text) => {
        props.dispatch(chengeTextActionCreator(text));
    }

    return (
        <MyPost 
            addPost = {addPost} 
            chengeText = {chengeText}
            chengePostText = {props.chengePostText} />
    )
}

export default MyPostContainer;