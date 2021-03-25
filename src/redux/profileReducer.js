const NEW_POST = 'NEW-POST';
const CHENGE_POST = 'CHENGE-POST';

let initialState = {
    posts: [
        {id: '1', post: 'Hello world may first post', like: 10},
        {id: '2', post: 'Hay may world', like: 12},
        {id: '3', post: 'Nice work frends', like: 15},
        {id: '4', post: 'Good!!! work', like: 17},
    ],
    
    chengePostText: '',
}

const profileReducer = (state = initialState, action) => {

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