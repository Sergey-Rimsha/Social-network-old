import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {validates} from './../../../utils/validators/validators';
import style from './../Dialogs.module.css';
import {rerenderFild} from './../../common/FormsControls/FormsControls';


const MessegeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    component={rerenderFild} 
                    validate={[validates.required, validates.maxLength30]} 
                    placeholder={'hello'} 
                    name={'myMessege'} 
                    type={'text'}>
                </Field>
            </div>
            <div className={style.btnWrap}>
                <button>push</button>
            </div>
        </form>
    )
}

const DialogsForm = reduxForm({
    // a unique name for the form
    form: 'DialogsForm'
  })(MessegeForm);

export default DialogsForm;