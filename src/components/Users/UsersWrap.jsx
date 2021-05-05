import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersWrap extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.carrentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
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

export default UsersWrap;