import React from 'react';
import ProfileUsers from './ProfileUsers';
import { connect } from 'react-redux';
import {setUserApi, setStatus, getStatus, savePhoto} from './../../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
                <ProfileUsers 
                    {...this.props} 
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id
});


export default compose(
    connect(mapStateToProps, {setUserApi, setStatus, getStatus, savePhoto}),
    withRouter,
    withAuthRedirect,
)(ProfileUsersWrap);


