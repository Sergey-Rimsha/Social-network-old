import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import UserMessege from './UserMessege/UserMessege';
import UsersChat from './UsersChat/UsersChat';
import style from './Dialogs.module.css';
import DialogsForm from './DialogsForm/DialogsForm';



const Dialogs = (props) => {

    let items = props.stateUsers.map((item) => {
        return (
            <UsersChat id={item.id} name={item.name} />
        )
        
    });

    let messegesItems = props.stateMesseges.map((item) => {
        return (
            <UserMessege id = {item.id} messege={item.messege} />
        )
    });

    const onSubmit = (formData) => {
        props.addMessege(formData.myMessege);
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
                        <DialogsForm onSubmit={onSubmit} />
                    </div>
                </div>

            </div>
        </Router>

    )
}

export default Dialogs;
