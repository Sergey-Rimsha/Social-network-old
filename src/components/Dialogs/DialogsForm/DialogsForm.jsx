import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {validates, maxLengthCreator} from './../../../utils/validators/validators';
import style from './../Dialogs.module.css';
import {TextareaForm} from './../../common/FormsControls/FormsControls';

const maxLength300 = maxLengthCreator(300);


const MessegeForm = (props) => {    
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    name={'myMessege'} 
                    type={'text'}
                    component={TextareaForm} 
                    validate={[validates.required, maxLength300]} 
                    placeholder={'hello'}>                    
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