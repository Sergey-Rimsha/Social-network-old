import React from 'react';
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