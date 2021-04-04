import React from 'react';
import style from './Users.module.css';
const Users = (props) => {

    let users = props.usersInfo.map(item => {
        return (
            <div className={style.wrap}>            
                <div className={style.wraperAction}>
                    <img src='' alt='user img'></img>
                    <div>
                        {
                            item.follow
                            ? <button onClick={() => {props.unFollowUser(item.id)}}>UNFOLLOW</button>
                            : <button onClick={() => {props.followUser(item.id)}}>FOLLOW</button>
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
        );
    });

    return (
        <div>
            {users}
        </div>
    )
}

export default Users;