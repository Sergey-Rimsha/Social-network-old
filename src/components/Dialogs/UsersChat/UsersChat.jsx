import React from 'react';
import {NavLink} from "react-router-dom";

import style from './UsersChat.module.css';

const UsersChat = (props) => {
    return (
        <div>
            <NavLink to = {`/dialogs/${props.id}`}>
                <div className={style.user}>
                    <div className={style.userImgWrap}>
                        <img src="" alt="user img"></img>
                    </div>
                    <div className={style.userName}>
                        {props.name}
                    </div>
                </div>
            </NavLink>

        </div>

    )
}

export default UsersChat;