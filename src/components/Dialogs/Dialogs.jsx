import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.wrap}>
            <div className={style.usersWrap}>
                <div className={style.user}>
                    <div className={style.userImgWrap}>
                        <img src="" alt="user img"></img>
                    </div>
                    <div className={style.userName}>
                        user name
                    </div>
                </div>
            </div>
            <div className={style.userMessege}>
                user messege
            </div>
        </div>
    )
}

export default Dialogs;
