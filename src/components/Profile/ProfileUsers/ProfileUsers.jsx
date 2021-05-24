import React from 'react';
import style from './../Profile.module.css';
import userPhoto from './../../../assets/images/ava_default.jpg';
import Preloader from './../../../components/common/Preloader/Preloader';
import ProfileStatusHooks from '../ProfileStatus/ProfileStatusHooks';
import ProfileUsersInfo from './ProfileUsersInfo/ProfileUsersInfo';


const ProfileUsers = (props) => {
    
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    
    const addFilePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }         
    }

    return (
        <div className={style.userWrap}>
            <div className={style.userPhoto}>
                <img src={props.profile.photos.large || userPhoto} alt="user_photo"></img>
                {
                    props.isOwner && 
                        <div>
                            <input onChange={addFilePhoto} name={'newPhotoFile'} type={'file'} />
                        </div>
                }
            </div>
            <div className={style.userInfo}>
                <div><h3>{props.profile.fullName}</h3></div>
                <ProfileStatusHooks 
                    status={props.status} 
                    setStatus={props.setStatus}
                    isOwner={props.isOwner} />
                <ProfileUsersInfo 
                    profile={props.profile} 
                    setProfile={props.setProfile}
                    isOwner={props.isOwner} />
            </div>
        </div>
    )
}

export default ProfileUsers;