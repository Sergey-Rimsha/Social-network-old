import {setUsers, setCurrentPage, setTotalUsersCount, setFetching, getUsers, follow, unfollow} from '../../redux/usersReducer';
import {getStatus} from './../../redux/profileReducer';
import {connect} from 'react-redux';
import UsersWrap from './UsersWrap';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {getUsersSelectors, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from './../../redux/usersSelectors';

let mapStateToProps = (state) => {
    return {
        users: getUsersSelectors(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {setUsers, setCurrentPage, setTotalUsersCount, setFetching, getUsers, follow, unfollow, getStatus}),
    withAuthRedirect,
)(UsersWrap);
