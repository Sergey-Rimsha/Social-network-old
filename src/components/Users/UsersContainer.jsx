import Users from './Users';
import {followUserActionCreator, unFollowUserActionCreator, setUsersAC} from '../../redux/usersReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followUserActionCreator(userId));
        },
        unFollowUser: (userId) => {
            dispatch(unFollowUserActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
