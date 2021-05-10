import React from 'react';

export const InputForm = ({input, name, type, placeholder, meta: {touched, error, warning}}) => {
    
    return (
        <div>
            <div>
                {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
            <input {...input} placeholder={placeholder} name={name} type={type} ></input>
        </div>
    )
}

export const TextareaForm = ({input, name, type, placeholder, meta: {touched, error, warning}}) => {
    return (
        <div>
            <div>
                {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
            <textarea {...input} placeholder={placeholder} name={name} type={type} ></textarea>
        </div>
    )
}
