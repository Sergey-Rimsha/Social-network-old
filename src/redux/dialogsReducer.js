const NEW_MESSEGE = 'NEW-MESSEGE';
const CHENGE_MESSEGE = 'CHENGE-MESSEGE';

const dialogsReducer = (state, action) => {

    switch(action.type) {
        case NEW_MESSEGE:
            let messege = {id: '5', messege: state.chengeMessegeText}
            state.messeges.push(messege);
            state.chengeMessegeText = '';
            return state;
        case CHENGE_MESSEGE:
            state.chengeMessegeText = action.text;
            return state;
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