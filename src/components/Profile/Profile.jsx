import React from 'react';
import style from './Profile.module.css';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PropfileUsersContainer from './ProfileUsers/PropfileUsersContainer';



const Profile = () => {
    return (
        <div>
            <div className={style.wrap}>
                {/* <ProfileInfo /> */}
            </div>
            <PropfileUsersContainer />
            <MyPostContainer/>
        </div>
    )
}

export default Profile;