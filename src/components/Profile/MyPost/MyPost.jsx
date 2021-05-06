import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from '../Post/Post';
import style from './NewPost.module.css';


const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'post'} type="text"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'post'
  })(MyPostForm);

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