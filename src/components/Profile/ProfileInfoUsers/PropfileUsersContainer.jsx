import ProfileUsersWrap from './ProfileUsersWrap';
import { connect } from 'react-redux';
import {setUsersProfile} from './../../../redux/profileReducer';
import { withRouter } from 'react-router';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileUsersWrap);

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);


