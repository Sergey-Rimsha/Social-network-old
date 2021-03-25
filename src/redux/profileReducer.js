const NEW_POST = 'NEW-POST';
const CHENGE_POST = 'CHENGE-POST';

const profileReducer = (state, action) => {

    switch(action.type) {
        case NEW_POST:
            let post = {id: '5', post: state.chengePostText, like: 1};
            state.posts.push(post);
            state.chengePostText = '';
            return state;

        case CHENGE_POST:            
            state.chengePostText = action.text;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: NEW_POST
    }
} 

export const chengeTextActionCreator = (text) => {
    return {
        type: CHENGE_POST,
        text: text
    }
}


export default profileReducer;