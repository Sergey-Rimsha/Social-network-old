import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import UserMessege from './UserMessege/UserMessege';
import UsersChat from './UsersChat/UsersChat';
import style from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';



const validates = {
    required: (value) => {
        if (!value) {
            return 'required'
        }
    },
    
    maxLength30: (value) => {
        if (value.length > 30) {
            return 'error!!! messege length > 30'
        }
    }
}


const rerenderFild = ({input, name, text, placeholder, meta: {touched, error, warning}}) => {
    
    return (
        <div>
            <div>
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
            </div>
            <textarea {...input} placeholder={placeholder} name={name} type={text} ></textarea>
        </div>
    )
}

const MessegeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={rerenderFild} validate={[validates.required, validates.maxLength30]} placeholder={'hello'} name={'myMessege'} type={'text'}></Field>
            </div>
            <div className={style.btnWrap}>
                <button>push</button>
            </div>
        </form>
    )
}

const MyMessegeReduxForm = reduxForm({
    // a unique name for the form
    form: 'messege'
  })(MessegeForm)

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
                        <MyMessegeReduxForm onSubmit={onSubmit} />
                    </div>
                </div>

            </div>
        </Router>

    )
}

export default Dialogs;
