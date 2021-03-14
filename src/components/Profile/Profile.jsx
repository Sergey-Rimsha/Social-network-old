import React from 'react';
import style from './Profile.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';


const Profile = () => {
    return (
        <div>
            <div className={style.wrap}>
                <img src="https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-okeana-2.jpg" alt="img"></img>
            </div>
            <div className={style.userWrap}>
                <div className={style.userPhoto}>
                    <img src="" alt="user photo"></img>
                </div>
                <div className={style.userInfo}>
                    <div>Sergey Rimsha</div>
                    <div>Date of Britch: <span>7.08.1994</span></div>
                    <div>Education: <span>БГПК</span></div>
                    <div>Web Site: <span>Vk.com</span></div>
                </div>
            </div>
            <NewPost />
            <Post />
        </div>
    )
}

export default Profile;