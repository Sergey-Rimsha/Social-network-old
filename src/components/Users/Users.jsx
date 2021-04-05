import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
        
    }

    render() {
        return (
            <div>
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