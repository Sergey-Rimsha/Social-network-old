const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';

let initialState = {
    usersInfo: [
        {id: 1, name: 'Sergey', status: 'Hello', country:'Belarus', city:'Borisov', follow: false},
        {id: 2, name: 'Gena', status: 'Hello men', country:'Belarus', city:'Minsk', follow: false},
        {id: 3, name: 'Sasha', status: 'Hello gays', country:'Ukrane', city:'Kiev', follow: true},
        {id: 4, name: 'Misha', status: 'Yo Yo Yo', country:'Belarus', city:'Borisov', follow: false},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                usersInfo: state.usersInfo.map(item => {
                    if (item.id === action.userId) {
                        return {
                            ...item, follow: true
                        }
                    }
                    return item
                })
            }
        case UNFOLLOW_USER: {
            return {
                ...state,
                usersInfo: state.usersInfo.map(item => {
                    if (item.id === action.userId) {
                        return {
                            ...item, follow: false
                        }
                    }
                    return item
                })
            }
        }
        default:
            return state;
    }
}

export const followUserActionCreator = (userId) => {
    return {
        type: FOLLOW_USER,
        userId: userId
    }
}

export const unFollowUserActionCreator = (userId) => {
    return {
        type: UNFOLLOW_USER,
        userId: userId
    }
}

export default usersReducer;