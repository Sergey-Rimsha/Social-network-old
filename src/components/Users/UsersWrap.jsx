import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersWrap extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.carrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
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
                />
            </>
        );
    }
}

export default UsersWrap;