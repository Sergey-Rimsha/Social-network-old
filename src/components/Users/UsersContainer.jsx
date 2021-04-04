import Users from './Users';
import {followUserActionCreator, unFollowUserActionCreator} from '../../redux/usersReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        usersInfo: state.users.usersInfo
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followUserActionCreator(userId));
        },
        unFollowUser: (userId) => {
            dispatch(unFollowUserActionCreator(userId));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
