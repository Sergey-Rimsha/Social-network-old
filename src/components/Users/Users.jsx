import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../assets/images/ava_default.jpg';
import { NavLink } from 'react-router-dom';
import usersApi from '../../api/api';


let Users = (props) => {

    //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map( p => {
                        return <span className={props.currentPage === p && style.selectedPage} 
                        onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map((item) => <div key={item.id} className={style.wrap}>       
                        <div className={style.wraperAction}>
                            <NavLink to={'/profile/' + item.id}>
                                <div className={style.imgWraper}>
                                    <img src={item.photos.small != null ? item.photos.small: userPhoto} alt='user_img'></img>
                                </div>
                            </NavLink>
                            <div className={style.BtnWraper}>
                                {
                                    item.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                                        usersApi.delFollow(item.id)                                       
                                            .then(response => {
                                                if (response.resultCode === 0) {
                                                    props.unFollowUser(item.id);  
                                                }
                                                props.toggleFollowingProgress(false, item.id);
                                            });
                                    }}>UNFOLLOW</button>
                                    : <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                                        usersApi.postFollow(item.id)
                                            .then(response => {
                                                if (response.resultCode === 0) {
                                                    props.followUser(item.id);
                                                }
                                                props.toggleFollowingProgress(false, item.id);
                                            });
                                    }}>FOLLOW</button>
                                }
                            </div>
                        </div>
                        <div className={style.wraperInfo}>
                            <div>
                                <div>{item.name}</div>
                                <div>{`item.status`}</div>
                            </div>
                            <div className={style.wrapCity}>
                                <div>{`item.country`}</div>
                                <div>{`item.city`}</div>
                            </div>
                        </div>
                    </div>  
                )
            }
        </div>
    );
    
}

export default Users;