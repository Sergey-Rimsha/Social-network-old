import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.carrentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });

    }


    render() {

        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= 10; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {
                        pages.map( p => {
                            return <span className={this.props.currentPage === p && style.selectedPage} 
                            onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                        })
                    }
                </div>
                {
                    this.props.users.map((item) => <div key={item.id} className={style.wrap}>            
                            <div className={style.wraperAction}>
                                <img src='' alt='user img'></img>
                                <div>
                                    {
                                        item.follow
                                        ? <button onClick={() => {this.props.unFollowUser(item.id)}}>UNFOLLOW</button>
                                        : <button onClick={() => {this.props.followUser(item.id)}}>FOLLOW</button>
                                    }
                                </div>
                            </div>
                            <div className={style.wraperInfo}>
                                <div>
                                    <div>{item.name}</div>
                                    <div>{item.status}</div>
                                </div>
                                <div className={style.wrapCity}>
                                    <div>{item.country}</div>
                                    <div>{item.city}</div>
                                </div>
                            </div>
                        </div>  
                    )
                }
            </div>
        );
    }
}

export default Users;