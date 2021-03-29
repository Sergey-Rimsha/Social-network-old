import React from 'react';
import style from './Profile.module.css';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {

    return (
        <div>
            <div className={style.wrap}>
                <ProfileInfo />
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
            <MyPostContainer/>
        </div>
    )
}

export default Profile;