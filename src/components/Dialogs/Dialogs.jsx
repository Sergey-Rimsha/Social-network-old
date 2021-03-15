import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";

import UserMessege from './UserMessege/UserMessege';
import UsersChat from './UsersChat/UsersChat';
import style from './Dialogs.module.css';

const Dialogs = () => {
    let usersItems = [
        {id: '1', name: 'Sergey'},
        {id: '2', name: 'Vasay'},
        {id: '3', name: 'Evgen'},
        {id: '4', name: 'Gena'},
    ];

    let userMesseges = [
        {id: '1', messege: 'Hello world'},
        {id: '2', messege: 'Hay'},
        {id: '3', messege: 'Nice work'},
        {id: '4', messege: 'Good!!!'},
    ];

    let items = usersItems.map((item) => {
        return (
            <UsersChat id={item.id} name={item.name} />
        )
        
    });

    let messeges = userMesseges.map((item) => {
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
                    {messeges}
                </div>


            </div>
        </Router>

    )
}

export default Dialogs;
