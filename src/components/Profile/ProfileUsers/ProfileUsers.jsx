import React from 'react';
import style from './../Profile.module.css';
import userPhoto from './../../../assets/images/ava_default.jpg';
import Preloader from './../../../components/common/Preloader/Preloader';
import ProfileStatusHooks from '../ProfileStatus/ProfileStatusHooks';


const ProfileUsers = (props) => {
    
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    let webSiteArr = [];

    const webSite = () => {
        let obj = props.profile.contacts;
        
        for (let key in obj) {
            if (obj[key]) {                
                webSiteArr.push({name: key, value: obj[key]});
            }
        }
    }

    webSite();

    const addFilePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }         
    }

    return (
            <div className={style.userWrap}>
                <div className={style.userPhoto}>
                    <img src={props.profile.photos.large || userPhoto} alt="user_photo"></img>
                    {props.isOwner && 
                        <div>
                            <input onChange={addFilePhoto} name={'newPhotoFile'} type={'file'} />
                        </div>
                    }

                </div>
                <div className={style.userInfo}>
                    <div><h3>{props.profile.fullName}</h3> </div>
                    <ProfileStatusHooks status={props.status} setStatus={props.setStatus}/>
                    <div>
                        <span>About Me:</span>
                        <div>
                            {props.profile.aboutMe || `---`}
                        </div>
                        <div>Date of Britch: 7.08.1994</div>
                        <div>Education: БГПК</div>
                    </div>
                    
                    <div> 
                        <span>Vebsite:</span>
                        {
                            webSiteArr.map( (item) => {
                                return (                                
                                    <div>{item.name}: <span>{item.value}</span></div>   
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

export default ProfileUsers;