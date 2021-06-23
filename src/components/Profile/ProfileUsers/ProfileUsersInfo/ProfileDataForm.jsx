import React from 'react';
import {Field, reduxForm} from "redux-form";
// import { maxLengthCreator, validates } from '../../../../utils/validators/validators';
import { InputForm, TextareaForm } from '../../../common/FormsControls/FormsControls';

// const maxLength12 = maxLengthCreator(150);

const ProfileDataForm = (props) => {

    const {profile} = props;

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    {props.error 
                    && <div>{props.error}</div>} 
                    <span>fullName:</span>
                    <Field name={'fullName'} 
                        type={'text'} 
                        component={InputForm} />
                </div>
                <span>About Me:</span>
                <div>
                    <Field name={'aboutMe'} 
                        type={'text'} 
                        component={TextareaForm} />
                </div>
                <div>
                    <span>looking for a job:</span>
                    <Field name={'lookingForAJob'} 
                        type={'checkbox'} 
                        component={InputForm} />
                </div>
                <div>
                    my professional skills:
                    <Field name={'lookingForAJobDescription'} 
                        type={'text'} 
                        component={TextareaForm} />
                </div>
            </div>                    
            <div> 
                <span>Vebsite:</span>
                {
                    Object.keys(profile.contacts).map(key => {
                       return <Contacts key={key} profile={profile} contactTitle={key} contactValue={profile.contacts[key]} />
                    })
                }
            </div>
            <div>
                <button>
                    save
                </button>
            </div>
        </form>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: 
            <span>
                <Field name={`contacts.${contactTitle}`} 
                    type={'https'} 
                    component={InputForm} />
            </span>
        </div>
    )
}

const ProfileReduxDataForm = reduxForm({
    // a unique name for the form
    form: 'Profile'
  })(ProfileDataForm);


export default ProfileReduxDataForm;