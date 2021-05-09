import React from 'react';

export const rerenderFild = ({input, name, text, placeholder, meta: {touched, error, warning}}) => {
    
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
