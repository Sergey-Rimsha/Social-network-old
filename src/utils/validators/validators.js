
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