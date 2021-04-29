import {followUser, unFollowUser, setUsers, setCurrentPage, setTotalUsersCount, setFetching, toggleFollowingProgress} from '../../redux/usersReducer';
import {connect} from 'react-redux';
import UsersWrap from './UsersWrap';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UsersContainer = connect(mapStateToProps, {followUser, unFollowUser, setUsers, setCurrentPage, setTotalUsersCount, setFetching, toggleFollowingProgress})(UsersWrap);

export default UsersContainer;
