import {followUserActionCreator, unFollowUserActionCreator, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, setFetchingAC} from '../../redux/usersReducer';
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        setFetching: (isFetching) => {
            dispatch(setFetchingAC(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersWrap);

export default UsersContainer;
