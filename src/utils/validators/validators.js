
export const validates = {
    required: (value) => {
        if (!value) {
            return 'required'
        }
    }
    
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}