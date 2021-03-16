let state = {
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
    ]
}

export let addPost = (text) => {
    let newPost = {id: '5', post: text, like: 1};
    state.posts.push(newPost);
}


export default state;