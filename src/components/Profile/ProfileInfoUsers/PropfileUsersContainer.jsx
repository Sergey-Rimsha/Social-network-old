import ProfileUsersWrap from './ProfileUsersWrap';
import { connect } from 'react-redux';
import {setUserApi, setStatus, getStatus} from './../../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id
});


export default compose(
    connect(mapStateToProps, {setUserApi, setStatus, getStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileUsersWrap);


