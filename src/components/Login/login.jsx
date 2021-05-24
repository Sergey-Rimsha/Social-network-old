import React from 'react';
import {connect} from "react-redux";
import { Redirect } from 'react-router';
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, validates } from '../../utils/validators/validators';
import { InputForm } from '../common/FormsControls/FormsControls';
import {setAuthLogin} from '../../redux/authReducer';


const maxLength12 = maxLengthCreator(31);

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} 
                    type={'email'} 
                    placeholder={'email'} 
                    component={InputForm} 
                    validate={[validates.required, maxLength12]} >
                </Field>
            </div>
            <div>
                <Field name={'password'} 
                    type={'password'} 
                    placeholder={'password'} 
                    component={InputForm} 
                    validate={[validates.required, maxLength12]} >
                </Field>
            </div>
            <div>
                <Field name={'rememberMe'} type='checkbox' component={InputForm} ></Field> <span>remember me</span>
            </div>
                {props.error && <div>{props.error}</div>}
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
        props.setAuthLogin(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setAuthLogin})(Login);