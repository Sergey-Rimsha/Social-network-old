import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';


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
            chengeMessegeText: ''
        },
        profile: {
            posts: [
                {id: '1', post: 'Hello world may first post', like: 10},
                {id: '2', post: 'Hay may world', like: 12},
                {id: '3', post: 'Nice work frends', like: 15},
                {id: '4', post: 'Good!!! work', like: 17},
            ],
            
            chengePostText: '',
        },

    },

    _callSubscriber() {
        console.log('state rerender');
    },

    getState() {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);

        this._callSubscriber(this._state);

    }

}


export default store;