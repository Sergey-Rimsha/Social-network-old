import React from 'react';
import ProfileUsers from './ProfileUsers';
import usersApi from './../../../api/api';

class ProfileUsersWrap extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }   
        usersApi.getProfile(userId)
            .then(response => {
                this.props.setUsersProfile(response);
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