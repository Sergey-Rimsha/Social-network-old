import axios from 'axios';
import React from 'react';
import ProfileUsers from './ProfileUsers';

class ProfileUsersWrap extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                console.log(response);
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