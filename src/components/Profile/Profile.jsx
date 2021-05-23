import React from 'react';
import style from './Profile.module.css';
import MyPostContainer from './MyPost/MyPostContainer';
import PropfileUsersContainer from './ProfileUsers/PropfileUsersContainer';



const Profile = () => {
    return (
        <div>
            <PropfileUsersContainer />
            <MyPostContainer/>
        </div>
    )
}

export default Profile;