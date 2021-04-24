import {followUser, unFollowUser, setUsers, setCurrentPage, setTotalUsersCount, setFetching} from '../../redux/usersReducer';
import {connect} from 'react-redux';
import UsersWrap from './UsersWrap';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {followUser, unFollowUser, setUsers, setCurrentPage, setTotalUsersCount, setFetching})(UsersWrap);

export default UsersContainer;
