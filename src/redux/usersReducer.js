const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 20,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                usersInfo: state.users.map(item => {
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
                usersInfo: state.users.map(item => {
                    if (item.id === action.userId) {
                        return {
                            ...item, follow: false
                        }
                    }
                    return item
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [ ...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        default:
            return state;
    }
}

export const followUserActionCreator = (userId) => {
    return {
        type: FOLLOW_USER,
        userId
    }
}

export const unFollowUserActionCreator = (userId) => {
    return {
        type: UNFOLLOW_USER,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setUsersTotalCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}

export default usersReducer;