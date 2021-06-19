import React from 'react';
import {setUsers, setCurrentPage, setTotalUsersCount, setFetching, getUsers, follow, unfollow} from '../../redux/usersReducer';
import {getStatus} from './../../redux/profileReducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {getUsersSelectors, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from './../../redux/usersSelectors';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        const {carrentPage, pageSize} = this.props;
        this.props.getUsers(carrentPage, pageSize);
    }

    // componentDidUpdate() {
    //     const {carrentPage, pageSize} = this.props;
    //     this.props.getUsers(carrentPage, pageSize);
    // }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {

        return (
            <>  
                {this.props.isFetching ? <Preloader /> : null}
                
                <Users currentPage={this.props.currentPage}
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    getStatus={this.props.getStatus}
                />
            </>
        );
    }
}


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
    connect(mapStateToProps, 
        {setUsers, setCurrentPage, setTotalUsersCount, setFetching, getUsers, follow, unfollow, getStatus}),
    withAuthRedirect,
)(UsersContainer);
