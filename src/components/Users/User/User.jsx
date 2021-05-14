import React from 'react';
import style from './User.module.css';
import userPhoto from './../../../assets/images/ava_default.jpg';
import { NavLink } from 'react-router-dom';


const User = ({item, unfollow, follow, followingInProgress}) => {
    return (
        <div className={style.wrap}>       
            <div className={style.wraperAction}>
                <NavLink to={'/profile/' + item.id}>
                    <div className={style.imgWraper}>
                        <img src={item.photos.small != null ? item.photos.small: userPhoto} alt='user_img'></img>
                    </div>
                </NavLink>
                <div className={style.BtnWraper}>
                    {item.followed
                        ? <button disabled={followingInProgress.some(id => id === item.id)}
                        onClick={() => unfollow(item.id)}>UNFOLLOW</button>
                        : <button disabled={followingInProgress.some(id => id === item.id)} 
                        onClick={() => follow(item.id)}>FOLLOW</button>}
                </div>
            </div>
            <div className={style.wraperInfo}>
                <div>
                    <div>{item.name}</div>
                    <div>{item.status || `--status--`}</div>
                </div>
                <div className={style.wrapCity}>
                    <div>{`item.country`}</div>
                    <div>{`item.city`}</div>
                </div>
            </div>
        </div>   
    )
}

export default User;