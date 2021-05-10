import React from 'react';
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, validates } from '../../../utils/validators/validators';
import { InputForm } from '../../common/FormsControls/FormsControls';


const maxLength12 = maxLengthCreator(12);

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} type={'text'} placeholder={'login'} 
                        component={InputForm} 
                        validate={[validates.required, maxLength12]} >
                </Field>
            </div>
            <div>
                <Field name={'password'} type={'text'} 
                    placeholder={'password'} 
                    component={InputForm} 
                    validate={[validates.required, maxLength12]} >
                </Field>
            </div>
            <div>
                <Field name={'rememberMe'} type='checkbox' component={InputForm} ></Field> <span>remember me</span>
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}


export default Login;