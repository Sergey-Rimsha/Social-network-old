import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import usersApi from '../../api/api';

class UsersWrap extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        usersApi.getUsersPage(this.props.carrentPage, this.props.pageSize)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.items);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true);
        usersApi.getUsersPage(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            });

    }


    render() {

        return (
            <>  
                {this.props.isFetching ? <Preloader /> : null}
                
                <Users currentPage={this.props.currentPage}
                    users={this.props.users}
                    unFollowUser={this.props.unFollowUser}
                    followUser={this.props.followUser}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

export default UsersWrap;