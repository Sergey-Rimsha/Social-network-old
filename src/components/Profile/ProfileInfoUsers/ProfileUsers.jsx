import React from 'react';
import style from './../Profile.module.css';
import userPhoto from './../../../assets/images/ava_default.jpg';
import Preloader from './../../../components/common/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';


const ProfileUsersWrap = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
            <div className={style.userWrap}>
                <div className={style.userPhoto}>
                    <img src={props.profile.photos.large || userPhoto} alt="user_photo"></img>
                </div>
                <div className={style.userInfo}>
                    <div>{props.profile.fullName}</div>
                    <ProfileStatus status={'hello world!!'}/>
                    <div>Date of Britch: <span>7.08.1994</span></div>
                    <div>Education: <span>БГПК</span></div>
                    <div>Web Site: <span>Vk.com</span></div>
                </div>
            </div>
    )
}

export default ProfileUsersWrap;