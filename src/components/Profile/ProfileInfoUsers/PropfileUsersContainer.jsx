import ProfileUsersWrap from './ProfileUsersWrap';
import { connect } from 'react-redux';
import {setUserApi} from './../../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileUsersWrap);

export default withAuthRedirect(connect(mapStateToProps, {setUserApi})(WithUrlDataContainerComponent));


