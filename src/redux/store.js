import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';


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
        users: {
            usersInfo: [
                {id: 1, name: 'Sergey', status: 'Hello', country:'Belarus', city:'Borisov', follow: false},
                {id: 2, name: 'Gena', status: 'Hello men', country:'Belarus', city:'Minsk', follow: false},
                {id: 3, name: 'Sasha', status: 'Hello gays', country:'Ukrane', city:'Kiev', follow: true},
                {id: 4, name: 'Misha', status: 'Yo Yo Yo', country:'Belarus', city:'Borisov', follow: false}
            ]

        }

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
        this._state.users = usersReducer(this._state.users, action);

        this._callSubscriber(this._state);

    }

}


export default store;