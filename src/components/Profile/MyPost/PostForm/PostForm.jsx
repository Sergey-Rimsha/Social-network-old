import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputForm } from '../../../common/FormsControls/FormsControls';
import {validates, maxLengthCreator} from './../../../../utils/validators/validators';

const maxLength300 = maxLengthCreator(300);


const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    name={'post'} 
                    type={'text'}
                    component={InputForm}
                    validate={[validates.required, maxLength300]}
                    placeholder={'send post'} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const MyPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'PostForm'
  })(MyPostForm);