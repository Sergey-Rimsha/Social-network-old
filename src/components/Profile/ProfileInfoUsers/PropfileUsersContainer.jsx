import ProfileUsersWrap from './ProfileUsersWrap';
import { connect } from 'react-redux';
import {setUsersProfile} from './../../../redux/profileReducer';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUsersProfile})(ProfileUsersWrap);


