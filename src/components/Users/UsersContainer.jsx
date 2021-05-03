import {setUsers, setCurrentPage, setTotalUsersCount, setFetching, getUsers, follow, unfollow} from '../../redux/usersReducer';
import {connect} from 'react-redux';
import UsersWrap from './UsersWrap';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';

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



const UsersContainer = withAuthRedirect(connect(mapStateToProps, {setUsers, 
    setCurrentPage, setTotalUsersCount, setFetching, 
    getUsers, follow, unfollow
})(UsersWrap));

export default UsersContainer;
