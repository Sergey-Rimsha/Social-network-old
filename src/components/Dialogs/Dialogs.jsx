import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";

import UserMessege from './UserMessege/UserMessege';
import UsersChat from './UsersChat/UsersChat';
import style from './Dialogs.module.css';

const Dialogs = (props) => {

    let {users, messeges} = props;

    let items = users.map((item) => {
        return (
            <UsersChat id={item.id} name={item.name} />
        )
        
    });

    let messegesItems = messeges.map((item) => {
        return (
            <UserMessege id = {item.id} messege={item.messege} />
        )
    });

    return (
        <Router>
            <div className={style.wrap}>
                <div className={style.usersWrap}>
                    {items}
                </div >
                <div className={style.usersWrap}>
                    {messegesItems}
                </div>


            </div>
        </Router>

    )
}

export default Dialogs;
