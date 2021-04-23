import React from 'react';
import style from './Users.module.css';


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
                    {console.log(item.followed)}         
                        <div className={style.wraperAction}>
                            <img src='' alt='user img'></img>
                            <div>
                                {
                                    item.followed
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
                )
            }
        </div>
    );
    
}

export default Users;