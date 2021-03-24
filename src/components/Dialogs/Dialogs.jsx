import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";

import UserMessege from './UserMessege/UserMessege';
import UsersChat from './UsersChat/UsersChat';
import style from './Dialogs.module.css';

const Dialogs = (props) => {

    let items = props.dialogsState.users.map((item) => {
        return (
            <UsersChat id={item.id} name={item.name} />
        )
        
    });

    let messegesItems = props.dialogsState.messeges.map((item) => {
        return (
            <UserMessege id = {item.id} messege={item.messege} />
        )
    });

    let newMessegeElem = React.createRef();

    let chengeMessege = () => {
        let text = newMessegeElem.current.value;
        let action = {
            type: 'CHENGE-MESSEGE', 
            text: text
        };

        props.dispatch(action);

    }

    let addMessege = () => {
        let action = {type: 'NEW-MESSEGE'};
        props.dispatch(action);
    }

    return (
        <Router>
            <div className={style.wrap}>
                <div className={style.usersWrap}>
                    {items}
                </div >
                <div className={style.usersWrap}>
                    {messegesItems}
                    <div className= {style.newMessege} >
                        <textarea onChange={chengeMessege} ref={newMessegeElem} value={props.chengeMessegeText}></textarea>
                        <div className={style.btnWrap}>
                            <button onClick = {addMessege}>push</button>
                        </div>

                    </div>
                </div>

            </div>
        </Router>

    )
}

export default Dialogs;
