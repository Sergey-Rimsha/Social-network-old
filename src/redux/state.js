const NEW_POST = 'NEW-POST';
const CHENGE_POST = 'CHENGE-POST';
const NEW_MESSEGE = 'NEW-MESSEGE';
const CHENGE_MESSEGE = 'CHENGE-MESSEGE';

let store = {
    _state: {
        dialogs: {
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
        },
        profile: {
            posts: [
                {id: '1', post: 'Hello world may first post', like: 10},
                {id: '2', post: 'Hay may world', like: 12},
                {id: '3', post: 'Nice work frends', like: 15},
                {id: '4', post: 'Good!!! work', like: 17},
            ],
        },

        chengePostText: '',
        chengeMessegeText: ''
    },

    _callSubscriber() {
        console.log('state rerender');
    },

    getState() {
        return this._state;
    },

    newPost() {
        let post = {id: '5', post: this._state.chengePostText, like: 1};
        this._state.profile.posts.push(post);
        this._state.chengePostText = '';
        this._callSubscriber(this._state);
    },

    newMessege() {
        let messege = {id: '5', messege: this._state.chengeMessegeText}
        this._state.dialogs.messeges.push(messege);
        this._state.chengeMessegeText = '';
        this._callSubscriber(this._state);
    },
    
    chengeMessege(text) {  // обновляем input при вводе тестка в чате
        this._state.chengeMessegeText = text;
        this._callSubscriber(this._state);
    }, 
    
    chengePost(text) { // обновляем input при вводе тестка в новый пост
        this._state.chengePostText = text;
        this._callSubscriber(this._state);
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === NEW_POST) {
            return this.newPost();
        } else if (action.type === NEW_MESSEGE) {
            return this.newMessege();
        } else if (action.type === CHENGE_MESSEGE) {
            return this.chengeMessege(action.text);
        } else if (action.type === CHENGE_POST) {
            return this.chengePost(action.text);
        } else {
            console.log(`Error watch to action.type: ${action.type}`);
        }
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

export default store;