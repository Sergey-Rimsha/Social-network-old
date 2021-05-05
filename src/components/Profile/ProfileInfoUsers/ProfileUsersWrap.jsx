import React from 'react';
import ProfileUsers from './ProfileUsers';

class ProfileUsersWrap extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }   
        this.props.setUserApi(userId);
        this.props.getStatus(userId);
        // this.props.setStatus(userId);
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