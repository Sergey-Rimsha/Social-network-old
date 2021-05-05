import {setUsers, setCurrentPage, setTotalUsersCount, setFetching, getUsers, follow, unfollow} from '../../redux/usersReducer';
import {getStatus} from './../../redux/profileReducer';
import {connect} from 'react-redux';
import UsersWrap from './UsersWrap';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {setUsers, setCurrentPage, setTotalUsersCount, setFetching, getUsers, follow, unfollow, getStatus}),
    withAuthRedirect,
)(UsersWrap);
