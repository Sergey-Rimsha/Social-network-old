import React from 'react';
import Dialogs from './Dialogs';
import {chengeMessegeActionCreator, addMessegeActionCreator} from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {

    let chengeMessege = (text) => {
        props.dispatch(chengeMessegeActionCreator(text));
    }

    let addMessege = () => {
        props.dispatch(addMessegeActionCreator());
    }

    return (
        <Dialogs 
            addMessege = {addMessege} 
            chengeMessege = {chengeMessege}
            stateUsers = {props.state.dialogs.users}
            stateMesseges = {props.state.dialogs.messeges}
            chengeMessegeText = {props.state.dialogs.chengeMessegeText}
            />
    )
}

export default DialogsContainer;
