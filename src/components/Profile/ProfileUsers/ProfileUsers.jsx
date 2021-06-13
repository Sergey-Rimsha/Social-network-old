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

    return (
        <div className={style.userWrap}>
            <ProfilePhotos profile={props.profile} isOwner={props.isOwner}/>
            <div className={style.userInfo}>
                <div><h3>{props.profile.fullName}</h3></div>
                <div>Set status:</div>
                <ProfileStatusHooks 
                    status={props.status} 
                    setStatus={props.setStatus}
                    isOwner={props.isOwner} />
                <ProfileUsersInfo 
                    profile={props.profile} 
                    saveProfile={props.saveProfile}
                    isOwner={props.isOwner} />
            </div>
        </div>
    )
}

const ProfilePhotos = (props) => {
    const addFilePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }         
    }
    return (
        <div className={style.userPhoto}>
            <img src={props.profile.photos.large || userPhoto} alt="user_photo"></img>
            {
                props.isOwner && 
                    <div>
                        <input onChange={addFilePhoto} name={'newPhotoFile'} type={'file'} />
                    </div>
            }
        </div>
    )
}




export default ProfileUsers;