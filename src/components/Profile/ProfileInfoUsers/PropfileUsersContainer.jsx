import ProfileUsersWrap from './ProfileUsersWrap';
import { connect } from 'react-redux';
import {setUserApi} from './../../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default compose(
    connect(mapStateToProps, {setUserApi}),
    withRouter,
    withAuthRedirect,
)(ProfileUsersWrap);


