import React from 'react';

export const validates = {
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

const MetaError = (touched, error, warning) => {
    return (
        <>
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </>
    )
}

export const rerenderFild = ({input, name, text, placeholder, meta: {touched, error, warning}}) => {
    
    return (
        <div>
            <div>
                <MetaError toucheda={touched}
                            error={error}
                            warning={warning}/>
            </div>
            <textarea {...input} placeholder={placeholder} name={name} type={text} ></textarea>
        </div>
    )
}
