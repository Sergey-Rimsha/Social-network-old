const NEW_MESSEGE = 'NEW-MESSEGE';

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
        ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_MESSEGE: 
            let messege = {id: state.messeges.length + 1, messege: action.text};
            return {
                ...state,
                messeges: [...state.messeges, messege],
            }
        default:
            return state;
    }

}

export const addMessegeAC = (text) => {
    return {
        type: NEW_MESSEGE,
        text
    }
}

export default dialogsReducer;