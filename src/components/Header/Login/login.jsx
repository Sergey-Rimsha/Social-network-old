import React from 'react';

import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={'input'} name={'login'} ></Field>
            </div>
            <div>
                <Field placeholder={'password'} component={'input'} name={'password'} ></Field>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}></Field> <span>remember me</span>
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

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

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm);

export default Login;