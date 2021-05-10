import React from 'react';
import Post from '../Post/Post';
import {MyPostReduxForm} from './PostForm/PostForm'
import style from './NewPost.module.css';


const MyPost = (props) => {

    let postsItems = props.profileState.map(item => {
        return (
            <Post id = {item.id} post = {item.post} />
        )
    });

    const onSubmit = (formData) => {
        props.addPost(formData.post);
    } 

    return (
        <>
            <div className={style.newPost}>
                <div>My Posts</div>
                <MyPostReduxForm onSubmit={onSubmit} />
            </div>

            {postsItems}

        </>
    )
}

export default MyPost;