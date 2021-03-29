const NEW_MESSEGE = 'NEW-MESSEGE';
const CHENGE_MESSEGE = 'CHENGE-MESSEGE';

const initialState = {
        users: [
            {id: '1', name: 'Sergey'},
            {id: '2', name: 'Vasay'},
            {id: '3', name: 'Evgen'},
            {id: '4', name: 'Gena'},
        ],
        messeges: [
            {id: '1', messege: 'Hello world'},
            {id: '2', messege: 'Hay'},
            {id: '3', messege: 'Nice work'},
            {id: '4', messege: 'Good!!!'},
        ],
        chengeMessegeText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        
        case NEW_MESSEGE: {
            let messege = {id: '5', messege: state.chengeMessegeText}
            let copyState = {...state};
            copyState.messeges = [...state.messeges];
            
            copyState.messeges.push(messege);
            copyState.chengeMessegeText = '';
            return copyState;
        }

        case CHENGE_MESSEGE: {
            let copyState = {...state};
            copyState.chengeMessegeText = action.text;
            return copyState;
        }

        default:
            return state;
    }

}

export const addMessegeActionCreator = () => {
    return {
        type: NEW_MESSEGE
    }
}

export const chengeMessegeActionCreator = (text) => {
    return {
        type: CHENGE_MESSEGE,
        text: text
    }
}

export default dialogsReducer;