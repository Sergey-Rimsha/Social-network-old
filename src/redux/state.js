let store = {
    _state: {
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
        posts: [
            {id: '1', post: 'Hello world may first post', like: 10},
            {id: '2', post: 'Hay may world', like: 12},
            {id: '3', post: 'Nice work frends', like: 15},
            {id: '4', post: 'Good!!! work', like: 17},
        ],
        newPostText: '',
        newMessegeText: ''
    },

    getState() {
        return this._state;
    },

    rerenderEntireTree() {
        console.log('state rerender');
    },

    newPost() {
        let post = {id: '5', post: this._state.newPostText, like: 1};
        this._state.posts.push(post);
        this._state.newPostText = '';
        this.rerenderEntireTree(this._state);
    },

    newMessege() {
        let messege = {id: '5', messege: this._state.newMessegeText}
        this._state.messeges.push(messege);
        this._state.newMessegeText = '';
        this.rerenderEntireTree(this._state);
    },
    
    addMessege(text) {
        this._state.newMessegeText = text;
        this.rerenderEntireTree(this._state);
    }, 
    
    newStateText(text) {
        this._state.newPostText = text;
        this.rerenderEntireTree(this._state);
    },
    
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

}

export default store;