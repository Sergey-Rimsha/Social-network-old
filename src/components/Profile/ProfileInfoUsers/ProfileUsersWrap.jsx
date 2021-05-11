import React from 'react';
import ProfileUsers from './ProfileUsers';

class ProfileUsersWrap extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }   
        this.props.setUserApi(userId);
        this.props.getStatus(userId);
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