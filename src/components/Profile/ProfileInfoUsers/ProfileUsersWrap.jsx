import axios from 'axios';
import React from 'react';
import ProfileUsers from './ProfileUsers';

class ProfileUsersWrap extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }   
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,{
            withCredentials: true
        })
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
    }

    render() {
        return (
            <>
                <ProfileUsers {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

export default ProfileUsersWrap;