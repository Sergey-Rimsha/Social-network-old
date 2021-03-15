import React from 'react';

import style from './UserMessege.module.css';

const UserMessege = (props) => {
    return (
        <div className={style.messegeWrap}>
            <div className={style.messegeUser}>
                {props.messege}
            </div>
            
        </div>
    )
}

export default UserMessege;